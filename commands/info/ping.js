module.exports = {
    name: "ping",
    aliases:["latency,pong,pung,pang"],
    category : "info",
    description : "Returns latency and API ping",
    run : async (client,message,args)=>{
            const channel = message.guild.channels.find(channel => channel.name ==="botresponse");
            channel.send(` 📉 Bot Ping! 📉 \nLatency is ${Math.floor(message.createdAt - message.createdAt)}ms \nAPI Latency  is ${Math.round(client.ping)}ms`);                   
        }
}
