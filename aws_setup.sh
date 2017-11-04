#!/bin/bash

sudo yum update

sudo yum install git docker

sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo curl -L https://raw.githubusercontent.com/docker/compose/1.17.0/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo service docker start

sudo usermod -a -G docker ec2-user

sudo curl -L https://raw.githubusercontent.com/docker/compose/1.17.0/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose

echo "Log out and log back in again to pick up the new docker group permissions"

source /etc/bash_completion.d/docker-compose 

# docker info
# git clone https://github.com/lena-team/lena-consumer.git

