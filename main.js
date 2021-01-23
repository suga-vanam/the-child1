const Discord = require('discord.js')


const client = new Discord.Client();

const prefix = '-';



const statuses = [
    `Among us`,
    `with the rules`,
    `as Imposter(idk wtf I'm doing)`,
    `as Crewmate(oof i died)`,
    
    
    
      ];
client.once('ready', () => {
    console.log('the child is online');
    setInterval( ()=>{
        const index = Math.floor(Math.random() * statuses.length );
        client.user.setActivity(statuses[index]);
    },10000);
});






client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  


    if(command === 'ping'){
        message.channel.send("ponging.....").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

            var embed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${ping} ms`)
            .setColor("#BC0057")

            m.edit(embed)
        });
    }
    if(command === 'thala'){
        var videos = [`https://www.youtube.com/watch?v=b117a8_jALE`,
        `https://www.youtube.com/watch?v=OSkone_vFFk`,
        `https://www.youtube.com/watch?v=L2evguInh5Y`,
        `https://www.youtube.com/watch?v=6fQk1Od5kUw`,
        `https://www.youtube.com/watch?v=BQzPmzZgF_0`,
        `https://www.youtube.com/watch?v=N1SLd93oF5w`,
        `https://www.youtube.com/watch?v=pxboHfZDJws`,]
        var video =Math.floor(Math.random() * videos.length);
        message.channel.send(videos[video])

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
        .addField("-8ball","I'll try my best to predict your future",true)
        .addField("-say","I'll say whatever you want me to.",true)
        .setColor('#0099E1')
        .setFooter("please don't spam." )


        message.channel.send(embed)
    };
   



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
        `Nobody can continuously go up, and nobody can continuosly go down. -CRM`,
        `No eat, no NEET. -BJS`,
        `Are you lebian? -BSS`,
        `You are a boy, with maximum age of sexteen. -BJS`]
       var quote = Math.floor(Math.random() * quotes.length);
       message.channel.send(quotes[quote])
       
       
    }

    
    

    if(command === '8ball'){
        var responses =[`vaipilla raja`,
        `vaipu irruku`,
        `kandippa nadakum`,
        `mooditu poiru XD`,
        `better not tell you now`,
        `Don't count on it`,
        `comedy pannathu da...lmao`,
        `obviously`,
        `why not`,
        `enna kalaikradhey velaya pochu`,
        `ennamo panniko`,
        `poi polaikra velaya paaru da`,]
        
        var respond =Math.floor(Math.random() * responses.length);
        message.channel.send(responses[respond])
    }

    if(command === 'say'){
        let botmessage =args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
    }

    if (command === 'clear'){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply ("oops no perms buddy :(");
        if(!args[0]) return message.channel.send("oof tell me how many messages to clear.");
        message.channel.bulkDelete(args[0]). then( () => {
        message.channel.send(`cleared ${args[0]} messages`). then(msg => msg.delete (5000));
        });
    }
    
   
   
    

   if(command === 'me'){
       const user = message.author;
    if (message.member.voice.channel)
    { 
    message.channel.send(`Everyone shushed.
 ${user.username}, wants to everyone to shut up. `
       )
                    
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                   
         for (const [memberID, member] of channel.members) 
        {             
        member.voice.setMute(true);         
         }
        }}
    


    
           
        if(command === 'ue'){
            if (message.member.voice.channel)
            { 
            message.channel.send(`You can speak now.`);
            
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                       
             for (const [memberID, member] of channel.members) 
            {             
            member.voice.setMute(false);         
             }
            }}     

 });    
 










client.login(process.env.TOKEN);
