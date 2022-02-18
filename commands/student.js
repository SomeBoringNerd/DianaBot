const { MessageEmbed } = require("discord.js");

let character_name = [
    "Diana",
    "Muzuniji",
    "Jukka",
    "\"Max\"",
    "Gabriel",
    "???",
    "??????",
    "\"looking-for-the-truth\"",
    "\"light-that-shine-upon-everything\"",
]

let gender = [
    "woman",
    "woman",
    "man",
    "man",
    "Unknown",
    "Unknown",
    "woman",
    "Unknown",
    "probably a man",
]

let short_description = [
    "oh wait, that's me!",
    "A kind trans-woman. Came from Japan to live her transition in a more tolerant society",
    "Your average buddy, quite laid-back but otherwise trustworthy and he's a bit nerdy",
    "Look like a hippie, but surprisingly he's not.",
    "they have around the same age as Diana, but they are not registered at school. The only reason they are allowed on school ground is because they personally know the principal and most teacher, meaning they are allowed to follow class if they want despite not being a registered student. They are not related to a teacher or the principal, they are just a friend of him.",
    "???",
    "???",
    "the person behind the pseudonyme \"looking-for-the-truth\" is a person that contacted Diana in order to collaborate and find answer about the disappearences. They don't want to meet you for some reasons.",
    "the person behind the pseudonyme \"light-that-shine-upon-everything\" is someone that take order from \"looking-for-the-truth\", and is kind of a spy. But for now, they don't have a lot of intel about the culprits."
]

let opinion = [
    "Well, I'm the best !",
    "\"i think that girl need a hug, she look sad\"",
    "He's one of her neighbors so he really like to spend time with her",
    "didn't meet before yet, new classmates to eachother but he trusts her",
    "a fellow comrade that have the same goal",
    "???",
    "???",
    "The answer to our questions",
    "A cool girl with lots of brain power"
]

let romance = [
    "What do you think I am ? a narcissist ?",
    "yes",
    "yes",
    "maybe",
    "no",
    "no",
    "She's not yours.",
    "no",
    "no",
]

let personality = [
    "\"Cool smart and lonely\" ||and a huge weeb||",
    "\"Onee-san\"",
    "Nerd.",
    "Energetic",
    "Mysterious, almost weird. Also, very friendly",
    "Brutally honest",
    "Cute",
    "Mysterious and creepy at time, but otherwise really helpfull and trust-worthy",
    "A cool girl with a lot of brain-power."
]

let location = [
    "anywhere you are",
    "school",
    "school",
    "school",
    "School, city",
    "??????????",
    "??????????",
    "Unknown",
    "\"A man on a mission is only where we need him to be\""
]

exports.run = async (bot, message, args) => {
    if(args.length <= 0){
        let nbr = character_name.length - 1;
        message.channel.send("please enter a character id between 0 and " + nbr);
    }else{
        
        let character_id = parseInt(args[0])
        if(character_id >= character_name.length)
        {
            let nbr = character_name.length - 1;
            message.channel.send("please enter a character id between 0 and " + nbr);
        } else{
            const embed = new MessageEmbed()
                .setTitle("Character Menu")
                .setDescription("about the character : " + character_name[character_id])
                .addField("gender", gender[character_id], false)
                .addField("personality", personality[character_id], false)
                .addField("can have romance with main character", romance[character_id], false)
                .addField("description", short_description[character_id], false)
                .addField("opinion on the main character", opinion[character_id], false)
                .addField("location", location[character_id], false)

            message.channel.send({ embeds: [embed] });
        }
    }
}

exports.help = {
    name:"characters"
}
