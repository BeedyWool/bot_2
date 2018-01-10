var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "/"
require("opusscript");
const fs = require("fs")

bot.on("ready", function () {
	console.log("Bot connecté");
});

bot.login("process.env.TOKEN")

bot.on('message', msg => {
  if (msg.content.startsWith('/invite')) {
        msg.channel.send({embed: {
            color: 0Xff0000,
            author: {
                name: "Vous souhaitez m'inviter sur votre serveur ?",
                description: "Vous trouverez le lien ci-dessous",
            },
            fields: [{
                    name: 'Lien :',
                    value: "https://discordapp.com/oauth2/authorize?client_id=371276679710244864&scope=bot&permissions=2146958591",
                },
            ],
        }});
}
})

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(message.content.startsWith("prefix")) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
let userData = points[message.author.id];
userData.points++;
let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if(curLevel > userData.level) {
// Level up!
userData.level = curLevel;
message.reply(`Vous êtes désormais au niveau **${curLevel}**!`);
}
if(message.content.startsWith("/level")) {
message.reply(`Voici vos statistiques : Niveau - ${userData.level}, Points - ${userData.points}`);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});






bot.on('message', msg => {
  if (msg.content.startsWith('/help')) {
        msg.channel.send({embed: {
            color: 0Xff0000,
            author: {
                name: "Commandes :",
            },
            fields: [{
                    name: '**_-Fun-_**',
                    value: "/musique liste , /roll , /8ball , /salut , /level , /money",
                },
                {
                    name: '**_-Modération-_**',
                    value: "/pay , /clean , /clear",
                },
                {
                    name: '**indéfini**',
                    value: "indéfini",
                },
            ],
        }});
}
});


bot.on("message", msg => {
  if (msg.content.startsWith('/game')) {
    if (msg.author.id !== "296636852906098698") {
      return msg.channel.sendMessage(":x: Vous n'avez pas l'autorisation de faire cette commande :x:")
    }
    let args = msg.content.split(" ").slice(1);
    var gammme = args.join(" ")
    bot.user.setGame(gammme)
  }
});



bot.on('message', message => {
   if (message.content.startsWith("/8ball")) {
var commande = [":8ball: | 🔴 Je ne pense pas, " + message.author.username,":8ball: | 🔴 Surement pas, " + message.author.username,":8ball: | 🔴 Non, " + message.author.username,":8ball: | 🔵 Je pense que oui, " + message.author.username,":8ball: | 🔵 Surement, " + message.author.username,":8ball: | 🔵 Oui, " + message.author.username,":8ball: | ⚫️ Aucune idée, " + message.author.username,":8ball: | ⚫️ Je n'ai aucun moyen de savoir, " + message.author.username]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})



bot.on('message', message => {
   if (message.content.startsWith("/roll")) {
var commande = [":control_knobs: | Vous etes tombé sur le numero: 1",":control_knobs: | Vous etes tombé sur le numero: 2",":control_knobs: | Vous etes tombé sur le numero: 3",":control_knobs: | Vous etes tombé sur le numero: 4",":control_knobs: | Vous etes tombé sur le numero: 5",":control_knobs: | Vous etes tombé sur le numero: 6",":control_knobs: | Vous etes tombé sur le numero: 7",":control_knobs: | Vous etes tombé sur le numero: 8",":control_knobs: | Vous etes tombé sur le numero: 9",":control_knobs: | Vous etes tombé sur le numero: 10"]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
});


bot.on('message',message => {
	if (message.content === "/salut")
message.channel.send(":wave: | Bonjour, " + message.author.username, {
 tts: true
})
});
