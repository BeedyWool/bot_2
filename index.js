var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "/"
const fs = require("fs")

bot.on("ready", function () {
	console.log("Bot connecté");
});

bot.on('message', message => {
   if (message.content.startsWith("/piece")) {
var commande = [":moneybag: | La pièce dit : Face.", ":moneybag: | La pièce dit : Pile."]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
});




bot.login(process.env.TOKEN)
