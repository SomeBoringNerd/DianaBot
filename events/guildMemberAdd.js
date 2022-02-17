module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        //Log the newly joined member to console
        console.log('User ' + member.user.tag + ' has joined the server!');

        let roleID = "922583059507839037";
        let membersWithRole = member.guild.roles.cache.get(roleID);

        member.roles.add(membersWithRole);
    }
}