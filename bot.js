const Discord = require('discord.js')
const { Client, Util } = require('discord.js');
const fs = require('fs');
const reps = JSON.parse(fs.readFileSync("./reps.json","utf8"));
const queue = new Map();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'drg') {
    msg.reply(' يقلبآاآى :heart_eyes: :drooling_face: ');
  }
});
//
client.on('message', msg => {
  if (msg.content === 'dr') {
    msg.reply('هاي');
  }
});
//
client.on('ready', () => {
  client.user.setGame(` DRG CLAN FOR EVER `,'https://www.twitch.tv/v5bz');
});
//
client.on('message', message => {
  if(message.content.split(' ')[0] == `D*kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | You dont have **KICK_MEMBERS** Permission!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | I dont have **KICK_MEMBERS** Permission!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("**• | Usage:** !kick \`\`@Name\`\` reason");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want kick **Your Self** ?');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick because his role highest than my role!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick.`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because he have Administration permissions!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`:white_check_mark: | Successfully \`\`KICKED\`\` ${user.user.username} from the server! :airplane: \`\`${reason}\`\``);
    }
});
//
client.on("message", message => {
  if(message.content.startsWith("D*embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });

//
client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith('D*b')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})
//

const bannedwords = [
    "كسمك",
    "قحبة",
    "شرموط",
    "عرص",
    "متناك",
    "خول"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" كفايا قلة أدب بقا ي حبيبي 😠 ").then(msg => {msg.delete(5000)});;
  };
});

//

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: Welcome To DRG CLAN Server :rose:`) 
}).catch(console.error)
})
//
client.on("message", message => {
  if (message.content.startsWith('D*send')) {
    if(!message.author.id === "350814853256052737") return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(1).join(" ");
user.send(args);
  }});

//


//
client.on("message", msg => {
    
    if(msg.channel.type !== 'dm') return;
    if(msg.author.id !== "350814853256052737") return;
    if(msg.content.startsWith("say")) {
        let args = msg.content.slice(4);
 let room = msg.mentions.channels.first();
let text = args.replace(room, "");
 if(!text) return msg.channel.send("❌ **الرجاء قم بكتابة النص**")
 if(!room) return msg.channel.send("**I Can't Find RooM ❌**");

        room.send(text)
        .then(msg.channel.send(`**${room} تم ارسال في ✅ **`).then(m => m.delete(6000)));
        }

});
//
client.on("message", msg => {
      moment.locale('ar_ly');
    let mention = msg.mentions.users.first();
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(!reps[msg.author.id]) reps[msg.author.id] = {
        rep: 0,
        reps: 1
    }
        fs.writeFile("./reps.json", JSON.stringify(reps), function(e) {
            if (e) throw e;
        })
    if(msg.content.startsWith("rep")){
        if(!mention) return msg.channel.send(`**عليك ان تمنشن الشخص اولا**`)
        if(mention.id === msg.author.id) return msg.reply(`**من جد؟؟**`)
     
           if(!reps[mention.id]) reps[mention.id] = {
        rep: 0,
        reps: 1
    }
   
     if(reps[msg.author.id].reps != moment().format('L')) {
 
       reps[msg.author.id].reps = moment().format('L');
          reps[mention.id].rep += 1
        msg.reply(`**
 تم اعطاْء اعجاب لـ
 
${emote3}-User \`${mention.username}\`
 
**`)
let emb = new Discord.RichEmbed()
 .setColor('#36393f')
          .setAuthor(mention.tag,mention.avatarURL)
          .setTitle(`**تم اعطأك اعجاب **`)
          .addField(`**اسم الذي قام بأعطأك اعجاب**`, `\`${msg.author.username}\``)
          .addField(`**ايدي الذي قام بأعطأك اعجاب **`, `\`${msg.author.id}\``)
          .addField(`**سيرفر الذي تم اعجابك به **`,`\`${msg.guild.name}\``)
          mention.send(emb);
         
             fs.writeFile("./reps.json", JSON.stringify(reps), function(e) {
            if (e) throw e;
        })
    }else {
       msg.reply(`**
لأ تستطيع ان تعطي اعجاب
 
-User \`${mention.username}\`
 
 
-Time يمكنك ان تعطي اعجاب \`${moment().endOf('day').fromNow()}\` **`)
   
    } 
       }
});
//

client.on("message", msg => {
    
    if(msg.channel.type !== 'dm') return;
    if(msg.author.id !== "617435468396494858") return;
    if(msg.content.startsWith("say")) {
        let args = msg.content.slice(4);
 let room = msg.mentions.channels.first();
let text = args.replace(room, "");
 if(!text) return msg.channel.send("❌ **الرجاء قم بكتابة النص**")
 if(!room) return msg.channel.send("**I Can't Find RooM ❌**");

        room.send(text)
        .then(msg.channel.send(`**${room} تم ارسال في ✅ **`).then(m => m.delete(6000)));
        }

});



client.login(process.env.BOT_TOKEN);
