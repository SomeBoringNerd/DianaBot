module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        //Log Bot's username and the amount of servers its in to console
        console.log(`Back online and ready to operate !`);

        //Set the Presence of the bot user
        bot.user.setPresence({ activities: [{ name: 'to wait for people to do /help'}] });
    }
}
