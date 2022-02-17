const { MessageEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
    // 
    var mentionuser = message.mentions.users.first();

    if(mentionuser === undefined){
        message.channel.send("please mention someone to pat");
    }else{
        const embed = new MessageEmbed()
            .setTitle(message.author.tag + " gave a headpat to " + mentionuser.tag)
            .setThumbnail('https://cdn131.picsart.com/278449650016211.png')
            .setImage('https://c.tenor.com/Fxku5ndWrN8AAAAC/head-pat-anime.gif');
        message.channel.send({ embeds: [embed] });
    }
}

exports.help = {
    name:"pat"
}
