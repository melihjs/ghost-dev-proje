const client = new (require('discord.js')).Client();
const mesaj = require('ghost-dev-console');
const fs = require('fs');
client.commands = new (require('discord.js')).Collection();
client.mesaj = mesaj;

client.on('ready', () => {
  console.log("bot kullanıma hazır.");
});

client.on('message', message => {
  let prefix = "?";
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  }
  if (cmd) {
    cmd.run(client, message, args);
  };
});

fs.readdir('./cmds/', (err, files) => {
  if (err) mesaj.hata(err);
  mesaj.yaz(`${files.length} komut yüklenecek.`);
  files.forEach(file => {
    let cmd = require(`./cmds/${file}`);
    mesaj.yaz(`${cmd.name} komutu yüklendi.`)
    client.commands.set(cmd.name, cmd);
  });
});


client.login('')