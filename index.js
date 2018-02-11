var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "/"
const fs = require("fs")

bot.on("ready", function () {
	console.log("Bot connecté");
});

bot.on('message', message => {nde = [":moneybag: | La
   if (message.content.startsWith("/piece")) {
var comma pièce dit : Face.", ":moneybag: | La pièce dit : Pile."]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}

});


bot.on('message', message => {
  if (message.content === '/pp') {
    message.reply(message.author.avatarURL);
  }
});




bot.on("message", msg => {
  if (msg.content.startsWith('/game')) {
    if (msg.author.id !== "316993284566417418") {
      return msg.channel.sendMessage("Vous n'avez pas l'autorisation de faire cette commande :x:")
    }
    bot.user.setGame("Besoin d'aide ? - /help", "https://www.twitch.tv/beedywoolmako")
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


bot.on("message", msg => {
  if (msg.content.startsWith('/status')) {
    if (msg.author.id !== "316993284566417418") {
      return msg.channel.sendMessage("Vous n'avez pas l'autorisation de faire cette commande :x:")
    }
    bot.user.setStatus("dnd")
  }
});


bot.on('message', message => {
   if (message.content.startsWith("/invite")) {
      message.channel.send(":love_letter: | https://discordapp.com/oauth2/authorize?client_id=400376181876195329&scope=bot&permissions=2146958591");
   }
});

	
bot.on("message", message => {
    if (message.content === "/help") {
            const embed = new Discord.RichEmbed()
                .setDescription(":question: | **Liste des commandes de TheVoid!**")
                .setColor(0xFA8072)
                .addField("/invite","Vous donne le lien pour m'inviter sur votre serveur.")
	        .addField("/roll","Vous donne un nombre aléatoire en 1 et 10.")
		.addField("/8ball","Répond aléatoirement a une question.")
		.addField("/pp","Vous donne votre photo de profil.")
	    	.addField("/piece","Lance la pièce : pile ou face ?")
	    	.addField("/bvn","Souhaitez la bienvenue a une personne.")
	    	.addField("/salut","Faites un petit coucou a quelqu'un.")
	    	.addField("/say","Fait parler le bot")
	    	.addField("/toto","Raconte une blague de toto.")
	    	.addField("Bienvenue","Creez simplement un salon nommé : bienvenue")
	    	.addField("Musiques","Fonctionne par mix de 20mn. /radio 1 ou 2 Il y a 2 mixs.")
	    	.addField("Niveaux","Vous donne des points quand vous parlez obtiendrez vous le meilleur niveau ? Regardez vos statistiques avec /level.")
	    	.setFooter("TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.")
	    	.setThumbnail("https://cdn.discordapp.com/avatars/400376181876195329/742ec0b8cc471f78184130d508d946f9.png?size=2048")
	    	

            message.channel.send({embed})

        };
});

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(message.content.startsWith("prefix")) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
let userData = points[message.author.id];
userData.points++;
let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if(curLevel > userData.level) {
userData.level = curLevel;
message.reply(`Vous êtes désormais au niveau **${curLevel}**!`);
}
if(message.content.startsWith("/level")) {
message.reply(`Voici vos statistiques : Niveau - ${userData.level}, Points - ${userData.points}`);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});

bot.on('message',message => {
if (message.content === "/radio 1") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./radio.mp3')
    message.channel.sendMessage(":musical_note: | La radio est lancée sur la piste 1 !")
});
};
});

bot.on('message',message => {
if (message.content === "/radio 2") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./radioo.mp3')
    message.channel.sendMessage(":musical_note: | La radio est lancée sur la piste 2 !")
});
};
});

bot.on("guildMemberAdd", async member => {
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("Arrivée!")
            .setDescription(`:wave: | ${member.user.tag} a atterri dans le serveur !`)
            .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
    member.guild.channels.find("name", 'bienvenue').send(emb);
});

bot.on('message', message => {
   if (message.content.startsWith("/say ")) {
      message.delete(1000);
      message.channel.send(message.content.slice(5, message.content.length));
   }
});

bot.on('message', message => {
   if (message.content.startsWith("/voidverse ")) {
      message.delete(1000);
      message.reply(message.author.username + ":check: Votre publication à bien été envoyée sur le serveur VoidVerse : https://discord.gg/xSMTuzS");
   }
});

bot.on('message', message => {
   if (message.content.startsWith("/voidverse ")) {
      message.delete(1000);
      bot.channels.get('402888985799557120').sendMessage(message.author.id, + (message.content.slice(5, message.content.length)));
   }
});	




 bot.on("roleCreate", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("Création de role!")
        .setDescription(`Un role à été crée sur : ${role.guild.name}.`)
        .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
        role.guild.channels.find("name", 'logs').send(emb)
	     } catch(err) {
            console.log(".")
        }
    })

 bot.on("roleDelete", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("Suppression de role!")
        .setDescription(`Le role ${role.name} à été supprimé du serveur : ${role.guild.name}`)
        .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
    role.guild.channels.find("name", 'logs').send(emb)
         } catch(err) {
            console.log(".")
        }
    })
	 
	 
 bot.on("emojiCreate", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Création d'émoji!")
            .setDescription(`L'émoji ${emoji.name} à été crée sur : ${emoji.guild.name}`)
        emoji.guild.channels.find("name", 'logs').send(emb)
		  } catch(err) {
            console.log(".")
        }
    });
    
 bot.on("emojiDelete", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("Suppression d'émoji!")
            .setDescription(`L'emoji ${emoji.name} à été supprimé du serveur : ${emoji.guild.name}`)
        emoji.guild.channels.find("name", 'logs').send(emb)
      } catch(err) {
            console.log(".")
        }
    })






	
bot.on('message', message => {
   if (message.content.startsWith("/bvn")) {
      message.delete(1000);
      message.channel.send(":tada: | **" + message.author.username + "** vous souhaite la bienvenue !");
   }
});

bot.on('message', message => {
   if (message.content.startsWith("/toto")) {
var commande = ["🤣 | Toto fais 25x le tour de la cour, Pourquoi ? sǝpnʇé sǝs ʇınsɹnod ʃı ɹɐɔ","🤣 | Toto fais que sauter, sa maman lui demande pourquoi, il répond : J'ai bu du sirop ce matin, mais j'ai oublié de secouer la bouteille."]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})

bot.on('message', message => {
   if (message.content.startsWith("/salut")) {
      message.delete(1000);
      message.channel.send(":wave: | **" + message.author.username + "** vous fait un coucou !");
   }
});

bot.login(process.env.TOKEN)
