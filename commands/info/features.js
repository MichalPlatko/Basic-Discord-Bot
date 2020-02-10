module.exports = {
    name: "feature",
    aliases:[""],
    category : "info",
    description : "Logs feature-ideas messages",
    run : async (client,message,args)=>{
        const channel = message.guild.channels.find(channel => channel.name ==="feature-ideas");
        const msgcontent=message.content.split("!feature");
        const msg=`${message.author.username} reported feature : ${msgcontent[1]}`;
        channel.send(msg);                   
    }              
}