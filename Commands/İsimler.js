const names = require("../../schemas/isimler");

module.exports = {
    "code": "isimler",
    "aliases": ["names"],
    
    async run (client, message, args, embed, config) {
     if (message.member.permissions.has(8) && !config.Roles.Register.some((x) => message.member.roles.cache.get(x))) return message.reply({ embeds: [embed.setDescription("Yeterli yetkilere sahip değilsiniz.")] }).catch((error) => console.log(error)).then((x) => setTimeout(() => { x.delete(); }, 10000));
     let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
     if (!member) return message.reply({ embeds: [embed.setDescription("Geçerli bir üye belirtmelisiniz.\n\n\> .kayıt @Reawen/ID Kuzey 18")] }).catch((error) => console.log(error)).then((x) => setTimeout(() => { x.delete(); }, 10000));

     let nameData = await names.findOne({ guildID: message.guild.id, userID: member.id });

     message.reply({ embeds: [embed.setDescription(`
     
${nameData ? `${nameData.names.length}` : "0"} adet isim geçmişi görüntülendi.** 
${nameData ? nameData.names.splice(0, 20).map((x, i) => `\`${x.name}\` (${x.rol}) (<@${x.yetkili}>)`).join("\n") : ""}
    
 `)] }).catch((error) => console.log(error)).then((x) => setTimeout(() => { x.delete(); }, 30000));


    }};
  