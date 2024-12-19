const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://i.ibb.co/MG5dm85/1450.jpg"                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Embilipitiya,srilanka

⚡age ,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767748006";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://i.ibb.co/MG5dm85/1450.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUQwS0tDUzRpMk10eUluV25zcXFsVUFrOXI5OGdRTW5wQk1GWDhTalQwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjEzUUFodUw4QWh6YU1IWTU5MjZCTzNTRHlkUUlaNHJMYTBXRjl4alp3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTHNoOWxmSnV0NWdnVi9LMW1SVWFBOWFhSExTSHNzaU5veHdJWC9NWW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS28yZFhCK3B5L3hyYnlOZmUzSU5tdEVsUkRVSk9RYjJ2TmtXeE9YdzI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKSEpUcnJHbjY1TThmdUpVUUtVWUVWK0xyL2xqVWduWlQweVpZTDNQMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVWVDhiODF6WU1Qdm5BODRMSUhMZldoNVd1cmFSdE4zUVlGTlQzc2w3Qk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pIem11YWh0K3VzaDUvVjgvRjhacEgzMUY2NkQyYVFqbVN2dGtBTy9IND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVMyU3NER2o2TVI0RDlzazg0dHZvZjBQWHNnLzhRbjYwbG9TNmFhcGRDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCS0dtSzZJTWJ6amJ2V29jbE0xVDV1bm9aODNFODhFSldTTXcwK2lQUzk0ZkZQV3FjTEZKQU5lcitJS1hNdHBvT1U2c0RXcWtDOG5XOU1HNFArdWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IjhmQUtQMVhDTHNyajVLSXpyMkRMc2dUQzVuM0dZTEJUQ2FMOWdIdG1DUFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1ueF9td3V0UnhLVW5TLWQtTkhaTUEiLCJwaG9uZUlkIjoiZWQ4Yjg4MzgtODllZC00N2RmLWE0YTYtNTFmNjFiMzE4MzkwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ4SUpkajMvWDZZRnBJalZnVzFUUmlUcCsxRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3M01kUjhPb0llOGw3Qk1EMW5MOXArQ3JUNms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjFQTDZROEIiLCJtZSI6eyJpZCI6Ijk0NzY3NzQ4MDA2OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6l/Cdl5sgIPCdl5gg8J2XpiDwnZebIPCdl5Qg8J2XofCShpzgvLvvo78ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmRmdJMEdFS2ZHanJzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdGZy9OVHdYUVhkOGdIRmhIcVlZZzhqWXdCMkt0VXl1WnRnY0xIZ21tM2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJtY3VreTBDakFZa1BUV1U1OU02RkJLT1BtQXlKd0l2OHZVLzRjbzVHVEFHVlE1b0dMR2RGTzNGY2ZJMGRVazBUNWtXcDhTUC9OcGlVTVN2M2dtakFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqL2NYbzVFeC9RUmdCWnpJWnBMR1BFQnp4Rk9jZDNJNXpwdnhRWGJhdXpadFFiOXkxV1F4c1lvT2J4elVKOEJaMWN3NmVsRGc3TzIwaGV3UGRHdnlpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY3NzQ4MDA2OjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV4WVB6VThGMEYzZklCeFlSNm1HSVBJMk1BZGlyVk1ybWJZSEN4NEpwdDQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ1ODMwOTJ9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "HESHAN 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "HESHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "privet",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
