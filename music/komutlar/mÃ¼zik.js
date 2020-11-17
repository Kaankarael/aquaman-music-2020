const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('765974008780292106') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`<a:aquamanloading:728771820781568002> ${client.user.username} - Müzik Komutları Listesi <a:aquamanloading:728771820781568002> `)
        .setDescription(`<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}çal** : __**Müziği Başlatırsınız**__ \n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}kapat** : __**Müziği Kapatırsınız**__ \n<a:aquamanharaket:758359203684417579>  **|** **${ayarlar.prefix}istatislik | i** : __**Botun İstatisliklerini Gösterir**__ \n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}geç** : __**Şarkıyı Geçersiniz**__\n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}ses** : __**Müziğin Sesini Ayarlarsınız**__\n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}sıra** : __**Kendi Müzik Sıranızı Görürsünüz**__\n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}duraklat** : __**Şarkıyı Duraklatırsınız**__\n<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}devam** : __**Şarkıyı Devam Ettirirsiniz**__ 
<a:aquamanharaket:758359203684417579> **|** **${ayarlar.prefix}radyo** : __**Radyo Dinlersiniz**__`)  
.addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=765974008780292106&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/ebk8ZqXvnc)`)        .setFooter(`Flex Music | Bot Sürümü : v12 | Varsayılan Prefix : ${ayarlar.prefix}`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['music , muzik'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};