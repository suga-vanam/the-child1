const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';


client.once('ready', () => {
    console.log('among us is online!');
});

client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  


    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if(command ==='thala'){
        message.channel.send('lebron is da GOAT!');
    }
    if(command === 'me'){
        if (message.member.voice.channel)
        { 
        message.channel.send('Everyone sushed.')
                        
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                       
             for (const [memberID, member] of channel.members) 
            {             
            member.voice.setMute(true);         
             }
            }}       
           
        if(command === 'ue'){
            if (message.member.voice.channel)
            { 
            message.channel.send('u can speak now.');
                        
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                       
             for (const [memberID, member] of channel.members) 
            {             
            member.voice.setMute(false);         
             }
            }}     

}); 


client.login(process.env.TOKEN);

