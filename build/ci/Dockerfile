# syntax=docker/dockerfile:1
FROM ubuntu:22.04
RUN apt -y update
RUN apt -y upgrade 
RUN apt -y install curl
RUN apt -y install git
RUN curl -fsSL https://deb.nodesource.com/setup_16.x 
RUN apt install -y nodejs
RUN apt-get install -y golang
RUN git clone https://github.com/welab2022/LCS-Development.git
RUN cd LCS-Development
RUN chmod +x startup.sh /
RUN bash "/startup.sh"