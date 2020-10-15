const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';


const statuses = [
    `Among us`,
    `with the rules`,
    `as Imposter(idk wtf I'm doing)`,
    `as Crewmate(oof i died)`
    
    
    ];
client.once('ready', () => {
    console.log('the child is online');
    setInterval( ()=>{
        const index = Math.floor(Math.random() * statuses.length);
        client.user.setActivity(statuses[index]);
    },10000);
});






client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  


    if(command === 'ping'){
        message.channel.send("pinging.....").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping}`)
            .setColor("#BC0057")

            m.edit(embed)
        });
    }
    if(command === 'thala'){
        message.channel.send('lebron is da GOAT!https://www.youtube.com/watch?v=L2evguInh5Y');
    }


    if(command === 'thala'){
        message.channel.send(':goat:');
    }


    if(command === 'help'){
        const embed = new Discord.MessageEmbed()
        .setTitle('These are my supported commands(NoT CaSe SeNsiTivE):')
        .addField("-help","To see this message",true)
        .addField("-ping","To check your ping",true)
        .addField("-thala","To see who the GOAT is",true)
        .addField("-quote","To see the wisdom of FIITJEE",true)
        .addField("-me","To mute everyone",true)
        .addField("-ue","To unmute everyone",true)
        .setAuthor('Suga')
        .setColor('#0099E1')
        .setFooter("please don't spam." )


        message.channel.send(embed)
    }


        
    if(command === 'quote'){       

        var quotes = [`sometimes my squares are a bit round. -CVR`,
       `Studying is a non-spontaneous process. Watching TV isn't. -CVR`,
       `Am I hot? -BJS`,
       `Don't do hard work, don't do smart work, just do work. -MRJ`,
       `if you go minus 1, I go minus 2. -BJS`,
       `Just bother yourself!! -PCM`,
       `Getting into IIT is easy, getting a girlfriend in IIT is tough. -CRSA`,
       `pls no one listen to my instructions. -EAB`,
       `You dont want to wash your face like you wash your clothes. -CVR`,
       `No, that is the centre of the earth, you cannot go there. -PGR`,
       `Just like real life, even raoults law is not perfect. -CVR`,
       `I can read most of your minds! -EAB`,
       `CORONA BANDEMIC!! -EAB`,
       `I like Ph :) -CVR`,
       `If you fall into the loop hole, you are da losa(the loser). -MJR`,
       `do you have brain in your mind? -BSR`,
       `water is a micronutrient. -BSA`,
       `If you say answer, I will deposit 100 money's in your account. -BJS`,
       `If I give you one punch you will fly to hell!! -BJK`,
       `Jiig Jaag motion. -CRA`,
       `Now putading. -CRA`,
        `Nobody can continuously go up, and nobody can continuosly go down. -CRM`]
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

