const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const { clientid } = require("./config.json");

const activity = {
  details: "chillin' in vice city",
  assets: {
    large_image: "gta-6-icon",
    large_text: "Grand Theft Auto VI",
  },
  // buttons: [
  //     {
  //         "label":"google",
  //         "url":"https://google.com/"
  //     }
  // ],
  timestamps: { start: Date.now() },
  instance: true,
};

client.on("ready", () => {
  client.request("SET_ACTIVITY", { pid: process.pid, activity: activity });
  console.log("You're now playing Grand Theft Auto VI");
});

client.login({ clientId: clientid });
