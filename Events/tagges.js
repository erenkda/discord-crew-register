const Discord = require("discord.js");
const client = global.client;
const config = require("../config.json");
exports.execute = async(oldUser, newUser) => {

const channel = client.guilds.cache.get(newUser.guild.id).channels.cache.get(config.Channels.TagLog);
const tag = config.Other.Tag;
const member = oldUser.guild.members.cache.get(newUser.id);
if (tag.some((x) => oldUser.tag.includes(x)) && !tag.some((x) => newUser.tag.includes(x))) {
member.roles.remove(config.Roles.Tagged);
channel.send(`${member} isimli kullanıcı tagı bıraktı. (${tag.map((x) => x.includes.oldUser.tag)})`);
} else if (!tag.some((x) => oldUser.tag.includes(x)) && tag.some((x) => newUser.tag.includes(x))) {
member.roles.add(config.Roles.Tagged);
channel.send(`${member} isimli kullanıcı tagı aldı. (${tag.map((x) => x.includes.newUser.tag)})`);
}
};
exports.conf = {
  event: "userUpdate"
};
