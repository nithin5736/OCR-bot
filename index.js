const { Client, Intents } = require("discord.js");
require("discord-reply");
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const Tesseract = require("tesseract.js");

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  if (msg.attachments.size > 0) {
    msg.attachments.forEach((attachment) => {
      // Getting the Image URL
      var ImageURL = attachment.proxyURL;

      // Running the image through Tesseract
      Tesseract.recognize(ImageURL, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        // Replying with the extracted test
        console.log(text);
        msg.reply(text);
      });
    });
  }
});

bot.once("ready", () => {
  console.log("Discord bot online");
});

bot.login(
  "OTk3MTM5Nzg4OTA3OTU0MTg2.GXb9cW.9JZuVAE1vpg0E2U91UsHOhVWYCStGJgXd4QkP0"
);
