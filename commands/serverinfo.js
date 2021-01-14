const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	aliases: ['serverinfo', 'server', 'guild', 'guildinfo', 'server-info', 'guild-info', 'sf'],
	guildOnly: true,
	ownerOnly: false,
	cooldown: 2,
	description: 'Display some server information',
	usage: '<>',
	async run(client, message, args) {
		owner = await client.users.fetch(message.guild.ownerID, { cache: false }); // so you don't get caching issues || 'n/a'; 
		let embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
		.addField('Owner', owner.tag, true)
		.addField('Server Region', message.guild.region, true)
		.addField('Created At', message.guild.createdAt.toDateString(), true)
		.addField('Boost Level', message.guild.premiumTier, true)
		.addField('Members Boosting', `${message.guild.premiumSubscriptionCount}/${message.guild.members.cache.filter(x => !x.user.bot).size}`, true)
		.addField(`Channels [${message.guild.channels.cache.size}]`, `${message.guild.channels.cache.filter(x => x.type == 'voice').size} Voice, ${message.guild.channels.cache.filter(x => x.type == 'text').size} Text`, true)
		.setTimestamp()
		.setFooter(`ID: ${message.guild.id}`)
		if (message.guild.features) {
			embed.addField('VIP Perks', message.guild.features.map(x => x.toString()).join(', ').replace('_', ' ') || "NONE", true);
		};
		message.channel.send(embed);
	},
};