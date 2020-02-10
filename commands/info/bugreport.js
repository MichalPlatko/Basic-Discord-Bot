module.exports = {
    name: "bugreport",
    aliases:[""],
    category : "info",
    description : "Logs in-game bug message to certain channel",
    run : async (client,message,args)=>{
            const channel = message.guild.channels.find(channel => channel.name ==="bugs");
            const msgcontent=message.content.split("!bugreport");
            const msg=`${message.author.username} reported : ${msgcontent[1]}`;
            channel.send(msg);                   
        }
}