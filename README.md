# Bootique.io Site [![Build Status](https://travis-ci.org/bootique/bootique-io.svg)](https://travis-ci.org/bootique/bootique-io)

[Live Site](https://bootique.io/)

## How to build:

## CI/CD

See [.travis.yml](./.travis.yml) for complete set of commands to build website.

1. Setup env: Node.js (Yarn), Java, Hugo;
1. Run Node.js to generate JS/CSS;
1. Run Java to generate documentation for set of projects;
1. Run Hugo to assemble all parts of website.

### To build site locally:

1. Install java(tested with java 8), node.js(8), yarn, hugo.
2. Build assets and docs and run hugo:
    ```bash
    cd ./app && yarn run build
    cd ../ && ./docs.sh]
    hugo server
    ```
