#!/bin/bash

sudo yum update

sudo yum install git docker telnet

sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo service docker start

sudo usermod -a -G docker ec2-user


# bash-completion and docker utility completion
sudo yum install -y bash-completion --enablerepo=epel

sudo curl -L https://raw.githubusercontent.com/docker/cli/master/contrib/completion/bash/docker -o /etc/bash_completion.d/docker

sudo curl -L https://raw.githubusercontent.com/docker/compose/master/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose

echo "Log out and log back in again to pick up the new docker group permissions"

# source /etc/bash_completion.d/docker-compose
source /etc/bash_completion

# docker info
# git clone https://github.com/lena-team/lena-consumer.git



# docker swarm related ports need to be added to security groups and attached to ec2 instances micros
