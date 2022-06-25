const { MessageEmbed } = require("discord.js");

const needle = require('needle')

exports.run = async (bot, message, args) => {
    let _max;
    let _chr = [];

    let formatted_txt = '';

    needle('get', 'https://someboringnerd.xyz/api/ttd/student/all').then(r => {
        
        _max = parseInt(r.body['max']) + 1;

        console.log(_max)

        for(let i = 0; i <= _max; i++)
        {
            _chr.push(r.body['name'][i])
        }

        let arg = parseInt(args.length)
        
        if(arg == 0)
        {
            
            for(let i = 0; i < _max; i++)
            {
                formatted_txt += i + " : " + _chr[i] + "\n"
            }

            if(_chr.length == 0){
                message.channel.send("the api is not working as intended at the moment, please wait a bit.")
            }else{
                message.channel.send("here's a list of all character available : \n" + formatted_txt)
            }
            
            
        }
        else
        {

            let character_id = parseInt(args[0])

            needle('get', 'https://someboringnerd.xyz/api/ttd/student?id=' + character_id).then(r => 
            {
                if(r.body['name'] == undefined){
                    message.channel.send("please enter a character id between 0 and " + _max + ".\n\n do /characters to get a list of tha available characters and their id")
                }else{
                    const embed = new MessageEmbed()
                        .setTitle(r.body['name'])
                        .addField("gender", r.body['gender'], true)
                        .addField("personality", r.body['personality'], true)
                        .addField("can have romance with main character", r.body['romance'], true)
                        .addField("description", r.body['description'], false)
                        .addField("opinion on the main character", r.body['opinion'], false)
                        .addField("location", r.body['location'], false);

                    message.channel.send({ embeds: [embed] });
                }
            })
        }
    })

    
}

exports.help = {
    name:"character"
}
