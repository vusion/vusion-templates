FROM ubuntu:16.04

# Install app requirements. Trying to optimize push speed for dependant apps
# by reducing layers as much as possible. Note that one of the final steps
# installs development files for node-gyp so that npm install won't have to
# wait for them on the first native module installation.
# RUN echo "deb http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse" > /etc/apt/sources.list
RUN export DEBIAN_FRONTEND=noninteractive \
  && sed -i'' 's@http://archive.ubuntu.com/ubuntu/@mirror://mirrors.ubuntu.com/mirrors.txt@' /etc/apt/sources.list \
  && apt-get update

RUN apt-get install -y zip pkg-config yasm python-pip python-dev build-essential git vim-tiny telnet wget curl build-essential libtool autoconf automake autoconf

# Install Node
RUN cd /opt \
  && wget https://nodejs.org/dist/v6.4.0/node-v6.4.0-linux-x64.tar.gz \
  && tar -xzf node-v6.4.0-linux-x64.tar.gz \
  && mv node-v6.4.0-linux-x64 node \
  && /usr/local/bin \
  && ln -s /opt/node/bin/* . \
  && echo "export PATH=$PATH:/opt/node/bin/" >> ~/.bashrc \
  && rm -f /opt/node-v6.4.0-linux-x64.tar.gz

# Install cnpm
RUN npm install -g cnpm pm2 --registry=https://registry.npm.taobao.org
RUN PHANTOMJS_CDNURL=https://npm.taobao.org/dist/phantomjs npm install phantomjs --registry=https://registry.npm.taobao.org --no-proxy -g


# Work in app dir by default.
RUN mkdir -p /home/project
WORKDIR /home/project

# Switch to the app user.
USER root
EXPOSE 5000
