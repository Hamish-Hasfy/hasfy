const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "link",
    aliases: ["invite", "zapros", "zaproś", "sparfy", "bot", "linki"],
    run: async (client, msg) => {
        const linki = new Discord.MessageEmbed()

    .setTitle(":link: Linki do bota Sparfy!")
    .setColor(0x0e4ee3)
    .addField("Support:", "> <a:pinezka:735603038005493870> Serwer support [`Kliknij`](https://discord.gg/nT36RXV) na tym serwerze uzyskasz pomoc z botem **Sparfy**")
    .addField("Dodaj bota:", "> <a:pinezka:735603038005493870> Link do naszego bota [**Sparfy**](https://discordapp.com/api/oauth2/authorize?client_id=695270481779228772&permissions=8&scope=bot) \n> `Pamiętaj dostaniesz go tylko tutaj` \n> `lub na serwerze support!` \n> `od osoby z rolą support i wyższą!`")
    .addField("Nasza strona internetowa!", "> <a:pinezka:735603038005493870> [**Sparfy.pl**](https://sparfy.pl)")
    .setFooter(`Na życzenie ${msg.author.tag} | ${msg.author.id}`, `${msg.author.displayAvatarURL()}`)
    msg.channel.send(linki)
    }
    
}
