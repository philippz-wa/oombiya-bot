/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'THANKS FOR CALLING ME!! 😁 *KOND PODA NINTA SS [ SCREENSHOT ] 😌*  _THANKS TO : R45H4N 9H1L199,4N7RU_CYB3R_50UL'})


    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'THANKS FOR CALLING ME!! 😁 *KOND PODA NINTA SS [ SCREENSHOT ] 😌*  _THANKS TO : R45H4N 9H1L199,4N7RU_CYB3R_50UL'})

    }));
}

