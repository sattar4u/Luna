const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abdulsattarjamali08@gmail.com"
global.location="Larkana,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴʏᴀ²²¹-ᴍᴅ" 


global.devs = "447441442535" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447441442535";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_29_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidFVONnZoeDJwRHUxRU51RC91Q2ovSEVnYzVFNlJ4S3B0T0RpMGRBVElQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2laWWZzaGVUWmllLXFERWRidnFGUVwiLFxuICBcInBob25lSWRcIjogXCJmOGRkMmZmYy1iMTg5LTQ4MjMtOTQ2My0wMTk4MGRkYzEzN2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNixcbiAgICAgIDIyMixcbiAgICAgIDQyLFxuICAgICAgMTI1LFxuICAgICAgMTI3LFxuICAgICAgMTI5LFxuICAgICAgMTg0LFxuICAgICAgMTU0LFxuICAgICAgMzksXG4gICAgICAxODUsXG4gICAgICA2MyxcbiAgICAgIDI0MSxcbiAgICAgIDI0OCxcbiAgICAgIDI1MCxcbiAgICAgIDE2MyxcbiAgICAgIDcwLFxuICAgICAgMzQsXG4gICAgICAzNyxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDIxMCxcbiAgICAgIDI1MyxcbiAgICAgIDM4LFxuICAgICAgMTQxLFxuICAgICAgMTYsXG4gICAgICAxMSxcbiAgICAgIDg0LFxuICAgICAgNyxcbiAgICAgIDEyNixcbiAgICAgIDIwNCxcbiAgICAgIDIyNCxcbiAgICAgIDIwNixcbiAgICAgIDEyNSxcbiAgICAgIDIyMyxcbiAgICAgIDIwNixcbiAgICAgIDIyMixcbiAgICAgIDQsXG4gICAgICAxMTQsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1NGNjFIQkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQ0MTQ0MjUzNToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5hdHVyYWxpc3RcIixcbiAgICBcImxpZFwiOiBcIjIzMTM2OTk4ODk0NDA5MjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUHYydjhHRUlDMnhiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQwemZLOGNIQjliQWRqd1hYRDdEcHJBNzd5akNuR05YaFNBQXZlRkFZeFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZzQ3dFJkbG9iVk9rODBvVURZUWxPUTR0SnloaUdzUTVEY0p4UWpwSWcwSWhmcWxPYndyeXJ4WExVaWRsZDFzckZHWEVqeHhaMzJjeFF4d0NQK3kxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUh6VUE0emRaWURJa2VzenZjaEJIc2hxYUh2VmZYS1FpZ2ZMYzdJcVB1eHJLT2xpbjFMczlybmZ5MjZwZCt6L0EwZVVacDZCVGt6clp0SnJnU1BqaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NDQxNDQyNTM1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYwNzc0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxjblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGNuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWRSZjFSelJUVHBUZnV0bkZCRDg2T1lQSU51R2RZNyswdXFrY3R0dzl0Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc4NDM5ODc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2MDc3NTM3NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴀɴʏᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "itz ᴀɴʏᴀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ANYA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
