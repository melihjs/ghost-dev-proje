module.exports = {
  name: "komut",
};

module.exports.run = async (client, message, args) => {
  let msg = args.slice().join(" ");
  if(!msg) return mesaj(':x: Lütfen bir mesaj belirt!');
  return message.channel.send(':+1: Başarılı!').then((x) => { client.mesaj.yaz(msg) });

  function mesaj(text) {
    return message.channel.send(text);
  };
};