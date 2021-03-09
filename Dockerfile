FROM fusuf/whatsasena:latest

RUN git clone https://github.com/antrucybersoul/Special-Bot- /root/Special-Bot-
WORKDIR /root/Special-Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
