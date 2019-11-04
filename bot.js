const Discord = require('discord.js')
const { Client, Util } = require('discord.js');
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


//

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: Welcome To DRG CLAN Server :rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
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

client.on("message", message => {
   
            if (message.content.startsWith("D*clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x36393e,
        description: "The Room chat has been Deleted !",
        footer: {
          text: "DRG Bot©."
        }
      }}).then(msg => {msg.delete(3000)});
                          }
 
     
});

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
client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');

  if (!channel) return;

  channel.send(`Welcome to DRG Clan Server, ${member}`);
});
//
client.on('ready', () => {// افنت التشغيل 
  setInterval(function(){
      client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                  var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 60000);// وقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
})

//
client.on('message', message => {
  if(message.content.includes('http')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر لينكات  :angry: **`)
  }
}
});
//
client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر لينكات  :angry: **`)
  }
}
});


client.login(process.env.BOT_TOKEN);
