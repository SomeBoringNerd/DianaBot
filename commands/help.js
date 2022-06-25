const { MessageEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
    
    const embed = new MessageEmbed()
        .setTitle("Help Menu")
        .setDescription("prefix of the bot is \"/\"")
        .addField("Fun commands", "funfact, pat", false)
        .addField("Regular commands", "help, character", false)
        .addField("Social networks", "game, wip, channel, source_code, trello", false);
    message.channel.send({ embeds: [embed] });
}

exports.help = {
    name:"help"
}
