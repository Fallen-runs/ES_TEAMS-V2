//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09hN01vVVVoNFp3T2dsVmR2aTRPSkR5cFJiMGJzSlBoWDFhTXdpb0ZuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVy9kMDRYSDFaWE9DV1czZEQ2ak4wWkR0bGJYM05aeHNNaXpHSkNYTW1Haz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTW83bjRRQXZuR3FIdjVNYXlmYzVaK2lOMGg4K05mQnN5cVVGRWxzWVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoUFRDQ1MxQzVOS2ZOOWFDUWlHVzhTUUgwOE82MmNDRXkrNWw1Qm5FZUVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FMnE5NDZRUEc2UTF4dVRkSDhaSUdEVjRoWTF1QURKVnhySVA3b1R4R3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBndU5EUUlROER3UWhvZnRMcCt4QldsUS9LejNXSWpBb1E1UStmQmtkUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtSaW95MmNZUWhyZmMyNXZXY0tTR0xuZWFvMnlIL2ErS1Zna1ZqazlsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFI0LzYwV0IzQ3QwU1Rabkc4aEN3RFExSnpwYXpITFBlYzRsQ2FJRS9rND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNTNU9XQi9LRG1NMFhFVGltUHQ1dFI2RW5JOTBBeW1OZnpmODh5VVhMdXBkL2d4bHZYaWh3ZU1URjF3YmFuY01CbTVvN0loMkdRcGpmWmgzazFOb2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJ1Qk9pRVBRQ0NJeSsxc1krY25OOW5UNUd2dmhDL2p5WWZ1WHBoWlIwYlFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2UjJXV3JsUVJmZUNZQm1yeGp5OFN3IiwicGhvbmVJZCI6IjM5M2Q0MjFkLTI2NzgtNDE4Yi1hZGMzLTU3NzFmOTVhNzhkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aU1zMmFFRENVcmZ3a2pMSjR0U2lweGVGKzQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQvT0tKKzJaL1hFSXRacFpPNVhPWkFOZWhQRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tUNnZjVURFS24wdTdjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVFNXVoeHR1bkRWU2Vqa3RtV0FqTWpVYTFobTF5cmtSVnpLMlhKY09uRUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1yVHhzbzdKby9JVW4vc0FwMG42TXJTNDIwOWhHNGxLUWNPRGNZOVo0NmcwdmZmV2Nxd3JZditabkl3MnJvZGpXclo0b3VtMkJXVDVmSjBReHY5RGpRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiNHpXWjRTRU1WVExXRTVtK3FIRFB1NTllZTYvTTZ3RWFjOW02eDJYSmNSRlIrUWJ2R0gyT3VlWkhRQVY5T3E5WWoySTdkSlR1dzBqUE1hdmM1YS9qUT09In0sIm1lIjp7ImlkIjoiMjM0OTAzMTQ4NTQ4MToyNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDMxNDg1NDgxOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJoT2JvY2JicHcxVW5vNUxabGdJekkxR3RZWnRjcTVFVmN5dGx5WERweEIifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjkzNzY1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQ0wifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
