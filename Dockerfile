FROM fusuf/whatsasena:latest

RUN git clone https://github.com/antrucybersoul/Special-Bot- /root/WhatsAsenaPublic
WORKDIR /root/Special-Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
