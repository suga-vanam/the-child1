const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';


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
        var quotes = ["sometimes my squares are a bit round. -CVR","Studying is a non-spontaneous process. Watching TV isn't. -CVR","Am I hot? -BJS","Don't do hard work, don't do smart work, just do work. -MRJ","if you go minus 1, I go minus 2. -BJS","Just bother yourself!! -PCM","Getting into IIT is easy,getting ur girlfriend into IIT is tough. -CVR","pls no one listen to my instructions. -EAB","You dont want to wash your face like you wash your clothes. -CVR","No, that is the centre of the earth, you cannot go there. -PGR","Just like real life, even raoults law is not perfect. -CVR", "I can read most of your minds! -EAB","CORONA BANDEMIC!! -EAB","I like Ph :) -CVR","If you fall into the loop hole, you are da losa(the loser). -MJR","do you have brain in your mind? -BSR","water is a micronutrient. -BSA"]
        var quote = Math.floor(Math.random() * quotes.length);
        message.channel.send(quotes[quote])
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

