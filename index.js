const {Client,Collection}  = require("discord.js");
const {config}  = require("dotenv");

const client=new Client({
    disableEveryone: true,
});

client.commands=new Collection();
client.aliases=new Collection();

//token config
config({
    path:__dirname + "/.env"
});

//command loader looping through commands folder looking for .js files with run method
["command"].forEach(handler => {
 require(`./handler/${handler}`)(client);
});

client.on("ready",()=>{
    console.log(`Hi,${client.user.username} is now online`);
    client.user.setPresence({
        status:"online",
        game:{
            name : "type !help for commands!",
            type : "PLAYING",
        }
    }
)});

//read through messages
client.on("message",async message=>{
    const prefix="!";
    
    if(message.author.bot)return; //dont respond to itself
    if(!message.guild)return;//dont respond to server message itself
    if(!message.content.startsWith(prefix)) return; //if doesnt start with prefix,skip
    if(!message.member) message.member = await message.guild.fetchMember(message); //if message member returns nothing handle it

    const args=message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length == 0) return; //if command is nothing else get args and run it
    let command =client.commands.get(cmd);
    if(!command) command=client.commands.get(client.aliases.get(cmd));//lookup command by .js file and use his method
    if(command) command.run(client,message,args);  

});
client.login(process.env.TOKEN);
