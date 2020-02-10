const {getMember,formatDate} =require("../../helperfunctions.js");
const {RichEmbed} = require("discord.js");
const {stripIndents} =require("common-tags");


module.exports = {
    name: "userinfo",
    aliases:["who,info"],
    category : "info",
    description : "Returns user info",
    run : async (client,message,args)=>{
        const channel = message.guild.channels.find(channel => channel.name ==="botresponse");
        const member=getMember(message,args.join(" "));
        //member variables
        const joined = formatDate(member.joinedAt);
        const role = member.roles.filter(r=> r.id !== message.guild.id).map(r=>r).join(", ") || "none";
        //user variables
        const created=formatDate(member.user.createdAt);
        const embed=new RichEmbed()
        .setFooter(member.displayName,member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
        .addField("Member Information",stripIndents`**> Display Name : ** ${member.displayName}
        **> Joined at : ** ${joined}
        **> Roles : ** ${role}`,true)
        .addField("User information",stripIndents`**> ID: **${member.user.id}
        **> Username : ** ${member.user.username}
        **> Discord Tag : ** ${member.user.tag}
        **> Created at :** ${created}`)
        .setTimestamp()
        if(member.user.presence.game)
        embed.addField("Currently playing",`**> Name :** ${member.user.presence.game.name}`)

        channel.send(embed);
    }
}
