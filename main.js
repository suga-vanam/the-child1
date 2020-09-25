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
        message.channel.send('lebron is da GOAT!https://www.youtube.com/watch?v=L2evguInh5Y');
    }
    if(command === 'help'){
        message.channel.send('`-ping:to get a pong -thala:to see who the GOAT is -me:to mute everyone -ue:to unmute everyone`');
    }
    if(command === 'me'){
        if (message.member.voice.channel)
        { 
        message.channel.send('Everyone shushed.')
                        
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                       
             for (const [memberID, member] of channel.members) 
            {             
            member.voice.setMute(true);         
             }
            }}       
           
        if(command === 'ue'){
            if (message.member.voice.channel)
            { 
            message.channel.send('You can speak now.');
                        
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                       
             for (const [memberID, member] of channel.members) 
            {             
            member.voice.setMute(false);         
             }
            }}     

}); 


client.login(process.env.TOKEN);

