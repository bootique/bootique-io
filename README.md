[![deploy site](https://github.com/bootique/bootique-io/workflows/deploy%20site/badge.svg)](https://github.com/bootique/bootique-io/actions)
# Bootique.io Site

Manages content of [bootique.io](https://bootique.io/). This includes site pages assembly, 
docs aggregation from external Bootique modules and publishing everything to the website.

## How to Build Locally

1. Setup env: Node.js (Yarn), Java, Hugo;
1. Run Node.js to generate JS/CSS (see [app](./app) directory);
1. Run Node.js to generate documentation and other external content for the site (see [scripts](./scripts) directory);
1. Run Hugo to assemble all parts of website.

Also see [site.yml](./.github/workflows/site.yml) workflow for environment setup and build command details.

## Important files / directories:

* `content/` : contains HTML page templates
* `data/` : contains documentation "models" and parameters. E.g. `modules.yaml` configures links related to each Bootique module.
* `docs.yml` : contains references to external Asciidocs of individual Bootique modules

## Publishing via CI/CD

To publish your changes to the website, commit them to the `master` branch and push to GitHub. 
GitHub Actions will pick them up, build and publish to the live site in just a few minutes. 
Additionally, documentation changes coming from other Bootique modules are published via a cron job scheduled at 4:15 UTC.

See [site.yml](./.github/workflows/site.yml) workflow for more details. 


