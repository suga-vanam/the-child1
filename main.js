const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command= require(`./commands/${file}`);
    
    client.commands.set(command.name, command);


}


client.once('ready', () => {
    console.log('the child is online!');
    client.user.setActivity('among us');

});

client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  


    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if(command === 'thala'){
        message.channel.send('lebron is da GOAT!https://www.youtube.com/watch?v=L2evguInh5Y');
    }
    if(command === 'thala'){
        message.channel.send(':goat:');
    }
    if(command === 'help'){
        message.channel.send(`
        these are my supported commands:
        **-ping**:to get a pong
        **-thala**:to see who the GOAT is
        **-quote**:to see the wisdom of FIITJEE
        **-me**:to mute everyone
        **-ue**:to unmute everyone
        `);
    }

    if(command === 'quote'){

        client.commands.get('quote').execute(message, args);
       
        
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

