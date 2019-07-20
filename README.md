# Bootique.io Site [![Build Status](https://travis-ci.org/bootique/bootique-io.svg)](https://travis-ci.org/bootique/bootique-io)

Manages contents of [bootique.io](https://bootique.io/). This includes site pages assembly, docs aggregation from external Bootique modules and publishing everything to the website. For docs assembly relies on custom Asciidoc engine from [here](https://github.com/bootique/bootique-docs).

## How to build:

1. Setup env: Node.js (Yarn), Java, Hugo;
1. Run Node.js to generate JS/CSS;
1. Run Java to generate documentation for set of projects;
1. Run Hugo to assemble all parts of website.

Also see [.travis.yml](./.travis.yml) for environment setup and build command details.

## CI/CD

The site is updated automatically via cron'd Travis job. See [.travis.yml](./.travis.yml) for details.

