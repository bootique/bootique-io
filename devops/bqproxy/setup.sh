#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

# Install updates
sudo yum -y update

# Install docker
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user

# Add env to .bashrc
echo 'export BOOTIQUE_WORKING_DIR="/home/ec2-user/bqproxy"' >> ~/.bashrc

# Cron jobs setup
(crontab -l; echo "20 4 * * 1 ${BOOTIQUE_WORKING_DIR}/cron/getcert renew ${BOOTIQUE_WORKING_DIR}") | crontab -

# Get certbot
cd "${BOOTIQUE_WORKING_DIR}"
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
