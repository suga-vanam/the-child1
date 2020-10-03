module.exports = {
    name: 'quote',

    desription : "gives u quotes",

    execute(message, args){
        var quotes = ["sometimes my squares are a bit round. -CVR","Studying is a non-spontaneous process. Watching TV isn't. -CVR","Am I hot? -BJS","Don't do hard work, don't do smart work, just do work. -MRJ","if you go minus 1, I go minus 2. -BJS","Just bother yourself!! -PCM","Getting into IIT is easy,getting ur girlfriend into IIT is tough. -CVR","pls no one listen to my instructions. -EAB","You dont want to wash your face like you wash your clothes. -CVR","No, that is the centre of the earth, you cannot go there. -PGR","Just like real life, even raoults law is not perfect. -CVR", "I can read most of your minds! -EAB","CORONA BANDEMIC!! -EAB","I like Ph :) -CVR","If you fall into the loop hole, you are da losa(the loser). -MJR","do you have brain in your mind? -BSR","water is a micronutrient. -BSA"]
        var quote = Math.floor(Math.random() * quotes.length);
        message.channel.send(quotes[quote])
        
    }
}