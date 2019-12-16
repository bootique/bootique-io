## bootique.io helper scripts 

### Data fetching

Scripts 

```
medium.ts
stars.ts
```

Used to prefetch dynamic data like stars count and bootique blog medium feed, 
saves data in `data` folder, and access to this data using hugo's 
[Data Templates](https://gohugo.io/templates/data-templates/).

`stars.ts` script requires `GITHUB_TOKEN` environment variable to be set to a valid
GitHub API token (generally any valid token will do, as this script reads public data).

### Documentation

```
docs.ts
```

This script used to build documentation for Bootique modules. It uses `docs.yml` 
config from the root of the bootique.io sources. Generally it pulls 
sources of required bootique modules and runs maven to actually build docs.

### Running scripts

To run all scripts use:

```shell script
yarn build
```

Or you can run individual script:
```shell script
yarn medium
yarn stars
yarn docs
```
