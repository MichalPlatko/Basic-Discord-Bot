module.exports = {
    name: "feature",
    aliases:["issue"],
    category : "info",
    description : "Logs feature-ideas messages",
    run : async (client,message,args)=>{
        const channel = message.guild.channels.find(channel => channel.name ==="feature-ideas");
        const msgcontent=message.content.split("!feature");
        const msg=`${message.author.username} thought of feature : ${msgcontent[1]}`;
        channel.send(msg);                   
    }              
}