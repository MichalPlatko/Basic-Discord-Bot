module.exports = {
    name: "help",
    aliases:[""],
    category : "info",
    description : "Shows all available commands",
    run : async (client,message,args)=>{
            const channel = message.guild.channels.find(channel => channel.name ==="botresponse");
            const msg="Avaliable commands\n!help - Displays this tab with commands\n!ping - Returns latency and API ping\n!userinfo - Returns your user info\n!feature - Logs feature or idea to dev\n!bugreport - Reports issue/bug to dev";
            channel.send(msg);                   
        }
}