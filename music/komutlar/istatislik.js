const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Flex Music  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("<a:aquamankrmz:770474510604435496> **Botun Sahibi**", "<@756030608601251893>")
  .addField("<a:aquamankrmz:770474510604435496> **Geliştirici** ","<@756030608601251893>")
  .addField("<a:aquamankrmz:770474510604435496> **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:aquamankrmz:770474510604435496> **Çalışma süresi**", seksizaman)
  .addField("<a:aquamankrmz:770474510604435496> **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:aquamankrmz:770474510604435496> **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("<a:aquamankrmz:770474510604435496> **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("<a:aquamankrmz:770474510604435496> **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:aquamankrmz:770474510604435496> **Node.JS sürüm**", `${process.version}`, true)
  .addField("<a:aquamankrmz:770474510604435496> **Ping**", bot.ping+" ms", true)
  .addField("<a:aquamankrmz:770474510604435496> **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("<a:aquamankrmz:770474510604435496> **Bit**", `\`${os.arch()}\``, true)
  .addField("<a:aquamankrmz:770474510604435496> **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**<a:aquamankrmz:770474510604435496> Bot Davet**", " [Davet Et](https://discord.com/api/oauth2/authorize?client_id=765974008780292106&permissions=8&scope=bot)", )
  .addField("**<a:aquamankrmz:770474510604435496> Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/2HzcHY2gzM)", )
  .addField("**<a:aquamankrmz:770474510604435496> Voteleme sayfası**", " [Botumuza Oy Ver Hazır Değil]", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};