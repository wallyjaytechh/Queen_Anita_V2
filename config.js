//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg";
global.video = "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://wa.me/2348144317152";
global.website = process.env.GURL || "https://wa.me/2348144317152";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg";
global.devs = "https://t.me/svenanjafrieda";
global.sudo = process.env.SUDO || "2348144317152,248155763709,2348054984935";
global.owner = process.env.OWNER_NUMBER || "2348144317152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/TLG3Mb4/photo-2024-11-01-16-00-22.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2348054984935";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhWSGdXR2FZSVV2ejBueUtDM2lRVndXT0FGdFhRTFpMM1ZSWmozVWVtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGVpQmU4K2s2Yjg2MTNXR01QTGNnZWFGMERPTlhEWUpLSld0Ny9oR1dTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQk80WFdYOTFqSWVWeUFURkhKWEVURWVXWDFwSEZMR2FqdEtZamthSmtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6b2hackpKd3VhcU5WZkdWRjVpK1F3V2kyNmlwMkh3SW9WUm84L2V3OFVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHN1NUZ3ZwNEtWME5OUnJHUHFxdnJpTGNyRnBJUXNDMEg4L3ljYUdYMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxuNXZqN29KbmR3Ry9sV3lXWkFwemNXMGUyOWVtRm43aENZbmc2RlBKRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBBZjhCaDh4cUFOMGZEVFhFWXNhQmFLTDAyM3ZJbnpGVlc3Wi84NkEwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2hNZTJDZTI2NWFYUVlXY2VpbVIxaHlmQnBqVmlxS0hSNGtjanZjajlIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlBT3hPeHpXSlhUZDRHVnU3Rms5aS9VU3d3QkpSVldVeDlJTXFRNnFOM1Q2Y2JhUytaQkgvSjRUQ3ZmQ2NBajEzQ0RscnF5aGxzaFBxOEJ1UkVYRUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJyRlIyYWNOM0FHeUJaRWJjK3NvLzhXYUIvZkd2eHJUeFF2eHF1RWZ0RWI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzNzg1ZVd5a1M0bXFqRUxJTjMybVhBIiwicGhvbmVJZCI6ImQ2NTUwYmZhLTI0ZjEtNGVjZC1hMDcxLTNlMjM4ODIzMWFiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWmJOZFV6RmczNEx0S29FeWxmdFdhUittMVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkcwREFjQkFZczVOTEl6dTBDOE9veHN2L2owPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRMV0cyTVNCIiwibWUiOnsiaWQiOiIyMzQ4MTQ0MzE3MTUyOjkxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRGwzNmdGRU1tRG1Mb0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRMG1sWGVqUEhmVmQ1MVhlektwS3ZVYkxLKzJ6ZWRrY2daSDgxOWJwSGc0PSIsImFjY291bnRTaWduYXR1cmUiOiJYQXdZczZnOCs2anozUVVzQmU1SFRiT1JPd3MzMHpSWU5RbVpDSVJ0Q1BZOVhUbVFpdWUyOXhzOXdHeVd4bzJjOTdnaTgvalRtT1h5QUtuenk4VE9EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib1RPL0JuUk0xWHhWMW4wcm5Wc2pMS1NpVzQ0RE5GZEhIb3JZUU1Qc3NQcnhpdGpXY3BRcjArOFgvdjBSK1RBSVNPQVRxUHVYd3BnZWRVUzFsMWxvQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ0MzE3MTUyOjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVOSnBWM296eDMxWGVkVjNzeXFTcjFHeXl2dHMzblpISUdSL05mVzZSNE8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2NDEyMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlF3In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "CODED BY WALLY JAY TECH",
  author: process.env.PACK_AUTHER || "WALLY JAY TECH",
  packname: process.env.PACK_NAME || "WALLYJAYTECH-MD",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD",
  ownername: process.env.OWNER_NAME || "WALLY JAY TECH",
  errorChat: process.env.ERROR_CHAT || "2348144317152",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "dyrbNSNtMf1CE84he61DR7Wx",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
