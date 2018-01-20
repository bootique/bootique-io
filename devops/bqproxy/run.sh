#!/bin/bash

docker run -d \
  --name bqproxy \
  --restart always \
  --publish "80:80" \
  --publish "443:443" \
  --volume "${BOOTIQUE_WORKING_DIR}/nginx:/etc/nginx/conf.d:ro" \
  --volume nginx-cache:/data/nginx/cache \
  nginx:1.13
