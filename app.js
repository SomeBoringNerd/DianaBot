const { prefix, token } = require("./config.json");
const { MessageEmbed } = require("discord.js");
const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS] });

const fs = require("fs");
const { channel } = require("diagnostics_channel");

const translate = require('@iamtraction/google-translate');

bot.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} loaded`)
    bot.commands.set(props.help.name, props)
}

const commandSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'))
commandSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(f => f.endsWith('.js'))
    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`)
        console.log(`${file} loaded from ${folder}`)
        bot.commands.set(props.help.name, props)
    }
});

// Load Event files from events folder
const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot))
    } else {
        bot.on(event.name, (...args) => event.execute(...args, bot))
    }
}

// add the "member" role to any new member
bot.on('messageCreate', message =>{

    if (message.author.id == bot.user.id) return;
    

    var args = message.content.substring(prefix.length).split(" ");
    let argument = args.splice(0).join(' ');

    let fr_channel_id = '923252732595417128';
    let fr_channel = message.guild.channels.cache.get(fr_channel_id);

    let fr_translation_channel_id = '941083752405299230'
    let fr_translation_channel = message.guild.channels.cache.get(fr_translation_channel_id);
    
    if(message.channel.id !== fr_channel.id) return;

    translate(argument, { to: 'en' }).then(res => {       
        fr_translation_channel.send(message.author.username + " said : " + res.text + "\n\n `original text : \"" + message.content + "\"`");
    }).catch(err => {
        console.error(err);
    });
})

bot.on('messageDelete', (messageDelete) => {
    let moderator_channel_id = '944646597332062249'
    let moderator_channel = messageDelete.guild.channels.cache.get(moderator_channel_id);

    moderator_channel.send(messageDelete.author.username + " said : \"" + messageDelete.content + "\" in <#" + messageDelete.channel.id + "> but deleted it`");
});

//Command Manager
bot.on("messageCreate", async message => {
    //Check if author is a bot or the message was sent in dms and return
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content == "good bot")
    {
        message.channel.send("Yey !")

        const embed = new MessageEmbed()
            .setTitle("Diana gave a headpat to " + message.author.tag)
            .setThumbnail('https://cdn131.picsart.com/278449650016211.png')
            .setImage('https://c.tenor.com/Fxku5ndWrN8AAAAC/head-pat-anime.gif');
        message.channel.send({ embeds: [embed] });
    }

    //get prefix from config and prepare message so it can be read as a command
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    //Check for prefix
    if(!cmd.startsWith(prefix)) return;

    //Get the command from the commands collection and then if the command is found run the command file
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    let channel = message.guild.channels.cache.get('923252732595417128')
    

});

//Token needed in config.json
bot.login(token);

