# docker image
FROM docker.elastic.co/elasticsearch/elasticsearch:5.6.3

# Create app directory
# WORKDIR /usr/src/app

# pipeline configuration files (which define the Logstash processing pipeline)
ADD configs/pipeline/ /usr/share/logstash/pipeline

# setting configuration files (which specify options that control Logstash startup and execution)
ADD configs/settings/logstash.yml /etc/logstash/conf.d/
