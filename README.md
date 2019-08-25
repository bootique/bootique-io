# Bootique.io Site [![Build Status](https://travis-ci.org/bootique/bootique-io.svg)](https://travis-ci.org/bootique/bootique-io)

Manages contents of [bootique.io](https://bootique.io/). This includes site pages assembly, docs aggregation from external Bootique modules and publishing everything to the website. For docs assembly relies on custom Asciidoc engine from [here](https://github.com/bootique/bootique-docs).

## How to Build Locally

1. Setup env: Node.js (Yarn), Java, Hugo;
1. Run Node.js to generate JS/CSS;
1. Run Java to generate documentation for set of projects;
1. Run Hugo to assemble all parts of website.

Also see [.travis.yml](./.travis.yml) for environment setup and build command details.

## Folder Structure

* HTML pages content is located under `content/`

## Publishing via CI/CD

To publish your changes to the website, commit them to the `master` branch and push to GitHub. Travis will pick them up, buid and publish to the live site in just a few minutes. Additionally documentation changes coming from other Bootique modules are published via a Travis cron job scheduled at 5:36 UTC.

See [.travis.yml](./.travis.yml) for more details. 


