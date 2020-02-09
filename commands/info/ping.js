module.exports = {
    name: "ping",
    aliases:["latency,pong,pung,pang"],
    category : "info",
    description : "Returns latency and API ping",
    run : async (client,message,args)=>{
            const msg= await message.channel.send("Pinging the bot  😇 ....");
            msg.edit(` 📉 Bot Ping! 📉 \nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms \nAPI Latency  is ${Math.round(client.ping)}ms`);
    }
}
