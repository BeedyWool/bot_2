const Discord = require("discord.js")

var bot = new Discord.Client();

bot.login("NzA0Mjg1NjkwMzM4MjEzOTU5.Xqa8HQ.eXUzcVFoNWXnRxpVnQy4aB24Ntw")

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
	    	.addField("Bienvenue","Creez simplement un salon nommé : bienvenue.")
            .addField("Logs","Vous préviens si un salon, un rôle ou un émoji est crée ou supprimé. Il vous faut un salon nommé logs sur votre serveur.")
            .addField("VoidVerse","Le voidverse vous permet de discuter avec des membres de n'importe quel serveur. Créez un salon nommé voidverse puis faites la commande /envoi pour envoyer un message.")
	    	.setFooter("TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.")
	    	.setThumbnail(bot.user.avatarURL)
	    	

            message.channel.send({embed})

        };
});

bot.on('message', message => {
    if (message.content.startsWith("/envoi")) {
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'voidverse');
            if(!xo02) return message.channel.send(":speech_balloon: | Le salon **voidverse** est introuvable")
            if(message.channel.name !== 'voidverse') return message.channel.send(":speech_balloon: | La commande à effectuer dans le salon **voidverse**")
            if(!xo03) return message.channel.send(":speech_balloon: | Merci d'écrire un message qui sera envoyé à tout le monde.")
            var embed = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setTitle(":speech_balloon: | Voidverse message")
            .addField("Envoyé par :", message.author.username + "#" + message.author.discriminator, true)
            .addField("Envoyé de :", message.guild.name, true)
            .addField("Message :", xo03)
            .setTimestamp()
            .setFooter("---------------------------------------------------------------------------------------------------------------")
          bot.channels.findAll('name', 'voidverse').map(channel => channel.send({embed}))
          message.delete(1000);
  }});

  bot.on("guildMemberAdd", async member => {
    var emb = new Discord.RichEmbed()
            .setColor("0C4DA3")
            .setTitle("Arrivée!")
            .setDescription(`:wave: | ${member.user.tag} a atterri dans le serveur !`)
            .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
    member.guild.channels.find("name", 'bienvenue').send(emb);
});

bot.on("guildMemberRemove", async member => {
    var emb = new Discord.RichEmbed()
            .setColor("A90F0F")
            .setTitle("Départ!")
            .setDescription(`:wave: | ${member.user.tag} a quitté le serveur !`)
            .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
    member.guild.channels.find("name", 'bienvenue').send(emb);
});
  
  bot.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('/kick ')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
                message.channel.send(`:anger: | J'ai bien kick ${user.tag}.`);
            })
            .catch(err => {
                message.channel.send(":anger: | Je n'ai pas pu kick cet utilisateur !");
              console.error(err);
            });
        } else {
            message.channel.send(":anger: | Cet utilisateur n'est pas dans le serveur !");
        }
      } else {
        message.channel.send(":anger: | Vous devez mentionner l'utilisateur à kick !");
      }
    }
  });

  bot.on("roleCreate", role =>{
    try {
    var emb = new Discord.RichEmbed()
    .setColor("0C4DA3")
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
    .setColor("A90F0F")
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
        .setColor("0C4DA3")
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
        .setColor("A90F0F")
        .setTitle("Suppression d'émoji!")
        .setDescription(`L'emoji ${emoji.name} à été supprimé du serveur : ${emoji.guild.name}`)
    emoji.guild.channels.find("name", 'logs').send(emb)
  } catch(err) {
        console.log(".")
    }
})

bot.on("channelCreate", channel =>{
    try {
    var emb = new Discord.RichEmbed()
        .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
        .setColor("0C4DA3")
        .setTitle("Création de salon!")
        .setDescription(`Le salon ${channel.name} à été ajouté au serveur : ${channel.guild.name}`)
    channel.guild.channels.find("name", 'logs').send(emb)
  } catch(err) {
        console.log(".")
    }
})


bot.on("channelDelete", channel =>{
    try {
    var emb = new Discord.RichEmbed()
        .setFooter(`TheVoid codé par BeedyWool avec l'aide de Splating, hébergé par Heroku.`, bot.user.avatarURL)
        .setColor("A90F0F")
        .setTitle("Suppression de salon!")
        .setDescription(`Le salon ${channel.name} à été supprimé du serveur : ${channel.guild.name}`)
    channel.guild.channels.find("name", 'logs').send(emb)
  } catch(err) {
        console.log(".")
    }
})

bot.on('message', message => {
    if (message.content.startsWith("/piece")) {
 var commande = [":moneybag: | La pièce dit : Face.", ":moneybag: | La pièce dit : Pile."]
      message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
 }
 });
 
 bot.on('message', message => {
   if (message.content === '/pp') {
     message.reply(message.author.avatarURL);
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

 bot.on('message', message => {
    if (message.content.startsWith("/invite")) {
       message.channel.send(":love_letter: | Vous désirez m'ajouter sur votre serveur ? Voici un lien : https://discordapp.com/oauth2/authorize?client_id=704285690338213959&scope=bot&permissions=8");
    }
 });


 bot.on('message', message => {
    if (message.content.startsWith("/say ")) {
       message.delete(1000);
       message.channel.send(message.content.slice(5, message.content.length));
    }
 });

 bot.on('message', message => {
    if (message.content.startsWith("/bvn")) {
       message.delete(1000);
       message.channel.send(":tada: | **" + message.author.username + "** vous souhaite la bienvenue !");
    }
 });
 
 
 bot.on('message', message => {
    if (message.content.startsWith("/salut")) {
       message.delete(1000);
       message.channel.send(":wave: | **" + message.author.username + "** vous fait un coucou !");
    }
 });


 bot.on("message", msg => {
    if (msg.content.startsWith('/game')) {
      if (msg.author.id !== "316993284566417418") {
        return msg.channel.sendMessage(":x: | Vous n'avez pas l'autorisation de faire cette commande !")
      }
      bot.user.setGame("Besoin d'aide ? - /help", "https://www.twitch.tv/beedywoolmako")
      if (bot.user.setGame("Besoin d'aide ? - /help", "https://www.twitch.tv/beedywoolmako"))
        return msg.channel.sendMessage(":white_check_mark: | J'ai correctement modifié mon status !")
    }
  });
  
  