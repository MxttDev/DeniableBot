
module.exports = {
    name : 'create',
    execute(message,args,Discord) {

        const channel = message.guild.channels.cache.find(channel => channel.name === "rules");

        const helpMessage = new Discord.MessageEmbed()
            .setColor(0x00AE86)
            .setTitle("Rules | Deniable")
            .setDescription("When you are on Deniable, you must be able to follow the rules to ensure that our server is a safe place for everyone.\n\n We request that you follow each rule and make sure to follow these rules. A staff member is entilted to punish you if they feel necessary.\n\n[Click here to view the rules.](http://rules.deniable.net/)")
            .setFooter('Deniable Network')
            .setTimestamp()


        channel.send(helpMessage);

    }
}