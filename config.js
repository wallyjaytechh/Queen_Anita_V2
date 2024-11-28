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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0crN2ZzM0Q1YVBVWlJ6SDdyTVFNUWNHMGFLa1Q5eEF0U2J4V0xDNzlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmJrK1RjLzN4TGdPRmgxTDVlVTVOeFZLLzVVcjI1WkJXek1OWmhST3VtTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TmcrUnRzWThFVnl2NUdKdFgxZ3l1eHRJVm5uWkdIbEc2K1FhYldzblc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSWZzQ3MxZjZyb2FPY2tNVG5UMVcrMkdzRjlmMHhPbjA5MmFUdkZyQW13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQWGg4ZmpIWlVsT3lXRE42K3NwTURWTEJhMUQyQ0Q4TC93aHhsQjVwbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5MWE14VitZaVdqK2x4WGxodEd5Ujc2YWExaCt4ZE1WbVBPTmVvY2JXa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklvRGlvenlKWFh0NmVXaDhjWFNwSU5LQlFTaVdSZkJyRU02VzczT21Ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkJZUHJjRnFUbDVZcldjRmRuVmZpbmNjWEpVYWJXbGI1dVE4cExvU3RUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNaSFdmTjllcFVVemxxbEU5dXdxZGthWWJ5VkR5ZzliSjgxZFZVdENnQ3E1bWR3dy9CUWNadzA0d2RPcEJjSTZiVzRHbzJCOVhkSmVvc01KaVRWSWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6IjJSdzM3bTNQUXE5dmRFMnY1R2llM2gzNVVxMVV3aW5QVGpIZnR0L3AxUjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlN0WWZydzFHUnphc1VmSXlMZjVBbFEiLCJwaG9uZUlkIjoiOTZhOGUxNTUtM2YyZS00MzMwLWE5ZDItZWUwYmE4ZTJlNzU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRSdmZkVmxES2M3NHFiQkZXNWVqL1NuNGhBST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEZiMndOT1dOYlVJSUlpTld6eWF1TnZyeEhZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSURsMzZnRkVJSzJvN29HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUTBtbFhlalBIZlZkNTFYZXpLcEt2VWJMSysyemVka2NnWkg4MTlicEhnND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTCsvTmxrcjBpOU95c2h1SWhNSnV2anEyZWpoYXJINUZDOUhIK3oxY3diaGFPT0lVZUNnR1JnUnJ6N3dPWWFGZExvS0RISDRmMi91VzQ1VHFJYTEyREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkIwNVdBTGlpU0EyUVMxbVpycjlHeVFFOGprS3pVWi9aSHN1TGFzekE0ZGxoNUJZdmxJcnk5VjAzZ0VML2xQYVFtWEtpWTk0NWdxV0E4Z0FieHFacGp3PT0ifSwibWUiOnsiaWQiOiIyMzQ4MTQ0MzE3MTUyOjkyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDQzMTcxNTI6OTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVU5KcFYzb3p4MzFYZWRWM3N5cVNyMUd5eXZ0czNuWkhJR1IvTmZXNlI0TyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjgyNzkyMX0="
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
