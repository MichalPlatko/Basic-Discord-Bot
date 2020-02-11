module.exports = {
    name: "help",
    aliases:[""],
    category : "info",
    description : "Shows all available commands",
    run : async (client,message,args)=>{
            const channel = message.guild.channels.find(channel => channel.name ==="botresponse");
            const msg="Avaliable commands\n!help - Displays this tab with commands\n!ping - Returns latency and API ping\n!userinfo @name - Returns your user info\n!feature <any message> - Logs feature or idea to dev\n!bugreport <any message> - Reports issue/bug to dev";
            channel.send(msg);                   
        }
}