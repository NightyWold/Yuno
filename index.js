const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require ('./index.json');
const token = process.env.token // a garder en version heroku
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé Yuki.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de la Chaos of the Shadow' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "Bonjour"){
        msg.reply("Heureux de te revoir parmis nous .")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "youtube"){
        msg.channel.send("https://www.youtube.com/channel/UC62DZknGuTginlfRVtNwQvQ")
        console.log(">>---Une personne a demandé pour aller sur la chaine de sergent.---<<")
    }

});

bot.login(token); //a garder en version heroku
