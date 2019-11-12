const fs = require("fs");
const rimraf = require("rimraf");
const path = require("path");
const childProcess = require('child_process');
const yaml = require('js-yaml');

interface Docs {
  readonly workingDir: string;
  readonly outputDir: string;
  readonly cacheDir: string;
  readonly repos: {
    readonly url: string;
    readonly versions: Map<string, string>;
  }[]
}

const docsConfigPath = path.join('..', 'docs.yml');
const baseSiteDocsDir = path.join('..', 'content', 'docs');

if(!fs.existsSync(baseSiteDocsDir)) {
  fs.mkdirSync(baseSiteDocsDir);
}

// read docs config (docs.yml)
const docs: Docs = yaml.safeLoad(fs.readFileSync(docsConfigPath, 'utf8')).docs;

// tmp working dir
const docsWorkingDir = path.join('..', docs.workingDir);

docs.repos.forEach(repo => {
  const projectName = repo.url.slice(repo.url.lastIndexOf('/') + 1, repo.url.lastIndexOf('.'));

  Object.keys(repo.versions).forEach(id => {
    const tag = repo.versions[id];

    const output = path.join(docsWorkingDir, projectName + '-' + tag);

    gitClone(repo.url, tag, output);

    // check that docs maven module exists..
    const docsModule = path.join(output, `${projectName}-docs`);
    if(mavenBuild(docsModule)) {
      if(copyDocs(docsModule, id, projectName)) {
        console.log(`Done ${projectName}:${id}`)
      } else {
        console.log(`Failed to build docs for ${projectName}:${id}`);
      }
    } else {
      console.log(`No docs module found for ${projectName}:${id}`);
    }
  });
});

/**
 * Clone specified tag to a give output path
 * @param url of the repo
 * @param tag to checkout
 * @param output path
 */
function gitClone(url: string, tag: string, output: string) {
  // remove output dir
  if(fs.existsSync(output)) {
    rimraf.sync(output);
  }
  const gitCmd = `git clone ${url} "${output}" --depth 1 --branch "${tag}"`;
  // console.log(gitCmd);
  childProcess.execSync(gitCmd);
}

/**
 * run maven build for a given docs module
 * @param docsModule path to docs maven module
 */
function mavenBuild(docsModule: string): boolean {
  if(!fs.existsSync(docsModule)) {
    return false;
  }
  console.log(`Building docs '${docsModule}'...`);
  const mvnCmd = `mvn -f ${docsModule} package -DskipTests -B -q`;
  childProcess.execSync(mvnCmd);
  return true;
}

function safeMkDir(dir: string) {
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

/**
 * Copy all docs from module target/site/docs/* to /content/docs/*
 *
 * @param docsModule path to docs module of project
 * @param id
 * @param projectName bootique module name
 */
function copyDocs(docsModule: string, id: string, projectName: string): boolean {
  const docsTarget = path.join(docsModule, 'target', 'site', 'docs');
  if (!fs.existsSync(docsTarget)) {
    return false;
  }

  const siteDir = path.join(baseSiteDocsDir, id); // `${projectName}-docs`
  safeMkDir(siteDir);

  fs.readdirSync(docsTarget).forEach(rootFile => {
    const nextFile = path.join(docsTarget, rootFile);
    if (fs.statSync(nextFile).isDirectory()) {
      safeMkDir(path.join(siteDir, rootFile));
      fs.readdirSync(nextFile).forEach(file => {
        fs.copyFileSync(path.join(nextFile, file), path.join(siteDir, rootFile, file));
      });
    } else {
      safeMkDir(path.join(siteDir, `${projectName}-docs`));
      fs.copyFileSync(nextFile, path.join(siteDir, `${projectName}-docs`, rootFile));
    }
  });
  return true;
}
