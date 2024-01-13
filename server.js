const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.TOKEN);
const fetch = require("node-fetch");
const fs = require("fs"); //NELLOGIX
require("express")().listen(1343);
//NELLOGIX
//UPTÄ°ME
//NELLOGIX
const express = require("express");
const app = express(); ////NELLOGIX
const http = require("http");
app.get("/", (request, response) => {
console.log("Pinglenmedi.");
response.sendStatus(200);
}); ////NELLOGIX

app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////NELLOGIX

//OYNUYOR KISMI
////NELLOGIX

client.on("ready", () => {
console.log("Bot Aktif");
let playing = client.voice.connections.size;

client.user.setPresence({
activity: {
name: "Uptime Bot 7/24",
type: "WATCHING",
url: "URL"
}
});
});

setInterval(() => {
var links = db.get("linkler");
if (!links) return;
var linkA = links.map(c => c.url);
linkA.forEach(link => {
try {
fetch(link);
} catch (e) {
console.log("" + e);
}
});
console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
if (!Array.isArray(db.get("linkler"))) {
db.set("linkler", []);
}
});

//embed hazÄ±rlÄ±klarÄ±

const help = new discord.MessageEmbed()
.setFooter("Uptime Bot")
.setColor("#660099")
.setThumbnail(
"https://cdn.discordapp.com/attachments/735195400872656955/771454911774851106/giphy.gif"
)
.setDescription(
`Selamlar, botunu uptime etmek iÃ§in yapman gereken adÄ±mlarÄ± sana sÃ¶yleyeceÄŸim. \n ArtÄ±k kolay bir ÅŸekilde botunu 7/24 aktif edebilirsin! \n\nðŸ“œ Botunu uptime etmek iÃ§in \`up!ekle\` yazabilirsin, NasÄ±l yapÄ±ldÄ±ÄŸÄ±nÄ± komutu yazdÄ±ÄŸÄ±nda gÃ¶receksin \n ðŸ“œ Uptime edilen botlarÄ±n sayÄ±sÄ±nÄ± gÃ¶rmek iÃ§in \`up!gÃ¶ster\` yazabilirsin. \n ðŸ“œ EÄŸer Botunu Uptimeden KaldÄ±rmak Ä°stiyorsan Kurucumuza UlaÅŸabilirsin. `
);

//NELLOGIX

client.on("message", message => {
if (message.author.bot) return;
var spl = message.content.split(" ");
if (spl[0] == "up!ekle") {
var link = spl[1];
fetch(link)
.then(() => {
if (
db
.get("linkler")
.map(z => z.url)
.includes(link)
)
return message.channel.send(
new discord.MessageEmbed()
.setFooter(" Uptime Bot")
.setColor("#660099")
.setDescription(
"Projeniz Sistemimizde Zaten Bulunuyor EÄŸer ÅžÃ¼pheniz Varsa Sahibime UlaÅŸabilirsin."
)
);
message.channel.send(
new discord.MessageEmbed()
.setFooter("Uptime Bot")
.setColor("#660099")
.setDescription(
"Projeniz Sistemimize BaÅŸarÄ±yla Eklendi,EÄŸer Ã‡alÄ±ÅŸmÄ±yor Ä°se Sahibime UlaÅŸabilirsin."
)
);
db.push("linkler", { url: link, owner: message.author.id });
})
.catch(e => {
return message.channel.send(
new discord.MessageEmbed()
.setFooter(" Uptime Bot")
.setColor("#660099")
.setDescription(
"LÃ¼tfen Bir Link Giriniz, \n Glitch Projenize Girin, Sol Yukardaki Show Butonuna TÄ±klayÄ±p Ä°n A Window Butonuna BasÄ±n, Ã‡Ä±kan SayfanÄ±n Linkini KopyalayÄ±p up!ekle komutunu kullanÄ±n. \n Not: EÄŸer Linki DoÄŸru GirdiÄŸin Halde Bu HatayÄ± AlÄ±yorsan Sahibime UlaÅŸ."
)
);
});
}
});

client.on("message", message => {
if (message.author.bot) return;
var spl = message.content.split(" ");
if (spl[0] == "up!göster") {
var link = spl[1];
message.channel.send(
new discord.MessageEmbed()
.setFooter(" Uptime Bot")
.setColor("#660099")
.setDescription(
`${db.get("linkler").length} Tane Proje AnlÄ±k Olarak Aktif Tutuluyor!`
)
);
}
});

client.on("message", message => {
if (message.author.bot) return;
var spl = message.content.split(" ");
if (spl[0] == "up!yardım") {
var link = spl[1];
message.channel.send(help);
}
});
