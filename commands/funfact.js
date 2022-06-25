// collection of funfacts about the game, the discord, or certain members
let funfacts = [
    "SomeBoringNerd hates javascript A LOT, but made me with that exact language. Ain't that weird ? update: they don't hate is as much as they used to.",
    "The mods are close friends of SomeBoringNerd",
    "Polemos is the only one with his join message in the general chat",
    "you know, Anakoni was a god once. SomeBoringNerd saw it. He was doing well until 2b2france died.",
    "Sanic_le_harrisson don't speak english very well, but he speak french like a philosopher.",
    "Most NPC present in the game for now were ideas of SomeBoringNerd's friends.",
    "The game wouldn't compile on mac and linux because SBN didn't knew a file needed to be named for it to be compiled.",
    "I wasn't online until the 9 february of 2022 because SomeBoringNerd wasn't able to run Node.Js on their computer.",
    "Friendly nerds are people that could have been mods if there wasn't enough mods already. If things get wild here, they are the most likely to become part of the moderation",
    "Despite how \"human\" I might look, I'm just a bot that run JavaScript.",
    "At first, the game wasn't supposed to have a dark lore. but my Creator like to be edgy sometime.",
    "The image host that SomeBoringNerd used to be stolen from Inteliboi/ShareX-Custom-Upload and the edited version they use is available on their github. Now, they remade it in node.js and it work just fine",
    "The name \"Through The Dark\" come from the One Trick Game Jam game SBN participated in, and it was a platerformer game. They finished last in all but one category, where she was first. \"Use of Theme\". The game have since been deleted for this one",
    "My favorite anime is Hunter x Hunter, and my least favorite is Mirai Nikki",
    "The game begin 3 month after the first disappearence.",
    "I only play video game when I have nothing else to do.",
    "My favorites musics are the parodies from Al Yankovik",
    "Mizuniji is an OC made by a friend of SomeBoringNerd and she exist in other video games, if said friend is asked for an OC. Her story change depending on the game she appear in, so what she did in other game isn't canon in that one, unless it is.",
    "Mods have secret guidelines, and allowing meme in the #general is one of them. That's right, posting meme in #general is legal, you won't get muted or banned for that",
    "Mods have a secret channel where I translate the messages of the language specifics channels in it. In the future, when they send a message in those channels, I translate their message into the language and send it through webhooks. that make it easier for them to moderate language they don't understand.",
    "SomeBoringNerd have ADHD and struggle to work on the game, that's why they made a discord and plan to sometime stream themself working on the game.",
    "SomeBoringNerd don't understand insults, so don't waste your time to insult them. Give them headpat instead, they love headpats",
    "General-2 is not english only, you can speak whatever language you want (including self-made one)",
    "If it was possible, I would probably be made in c# or php.",
    "I never left the town the game take place in since my birth",
    "I used to run on SomeBoringNerd's personal computer, and was moved to an actual vps bthe 2nd of april 2022",
    "My favorite man anime character is Zora from Black Clover, and my favorite woman character is Komi from Komi can't communicate. My favorite genderless character is Najimi from Komi can't Communicate",
    "I also provide mod tools, auto-role, and anti-raid features that are work in progress.",
    "I haven't seen my parents for more than a year, and live alone at home. The only reason I know they are alive is because they still pay the location fee of our house.",
    "I don't socialize because I just don't feel like it. The only reason I'm friend with Jukka is because he's my neighbour",
    "My persona is basically \"Lonely cool smart girl\", and at first, I was planned to be a genderless and personaless character so \"The player could identify themself in the main character\", but that idea was scrapped because it made me look like a blank character in the lore written at that time.",
    "When they write lore, SomeBoringNerd write it in french and for 30 minutes at most per day",
    "Water and glass are the same texture and same shader",
    "The game take place in a town where one's nationality is irrelevant. Many people come from many countrys around the World.",
    "SomeBoringNerd lost almost 1h when adding the second NPC while testing dialogues because GUI buttons weren't updated for Jukka's dialogue lines",
    "While I'm the same person as the Diana from the game, my in-game counter-part isn't aware she's in a game.",
    "If I was to come out as a lesbian, my parents wouldn't care.",
    "Despite what SomeBoringNerd said about breaking the legs of anyone who crash me, it's a joke, they won't do it (I hope) (dev note : I can and will.)",
    "Like a lot of people in my town, I was raised as a Christian.",
    "Two character that aren't in the game yet, but will be later, have no real implication in the game, but are made after two people that SomeBoringNerd hold deep in her heart",
    "It is heavely implied that Gabriel don't have a gender at all and is not just lying about what's in their pant.",
    "\"Max\" is Mesrob's nickname because SomeBoringNerd keep forgetting it and they can't spell it right",
    "Flandreu is a femboy in denial",
    "the characters that hide themselves behind pseudonymes may or may not be people I already know. But either way, they already know who *I* am.",
    "SomeBoringNerd hate Unity lightning system because it bake really slowly even on their GPU",
    "SomeBoringNerd made me with Unity. Most models are made with MagicaVoxel, and some textures are made in GIMP. Musics are made in FL Studio.",
] // -3 is the number of funfacts

exports.run = async (bot, message, args) => {
    // pick a card
    if(args.length > 0){
        let nbr = parseInt(args[0]);
        if(nbr < 0 || nbr >= funfacts.length){
            let nbr_2 = funfacts.length - 1;
            message.channel.send("please enter a number between 0 and " + nbr_2);    
        }else{
            message.channel.send("funfact number " + nbr + " : " + funfacts[nbr]);    
        }
    }else{
        let rng = Math.floor(Math.random() * funfacts.length);
        
        // send a random funfact
        message.channel.send("funfact number " + rng + " : " + funfacts[rng]);
    }
}

exports.help = {
    name:"funfact"
}
