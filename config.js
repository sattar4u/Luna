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
global.scan = "SUHAIL_17_46_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpDVXd4dDFhbEs2TDFEcVNKbmE2N2VxM0hRdjkyS1ozczhsTGFNd0czU1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0wOG41d2NSUklpeGNjSnZ5TDVzcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU4NTRkYWEtM2QzMi00ZTFjLWFlMTUtYTkzODU3MTIxOTY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDI0MCxcbiAgICAgIDE4OCxcbiAgICAgIDExNCxcbiAgICAgIDE2NyxcbiAgICAgIDEzMSxcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMTYzLFxuICAgICAgODcsXG4gICAgICA2MixcbiAgICAgIDEzNyxcbiAgICAgIDIsXG4gICAgICAxNjIsXG4gICAgICAxNjMsXG4gICAgICAyNixcbiAgICAgIDU4LFxuICAgICAgMTE2LFxuICAgICAgMjI3LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDE5MixcbiAgICAgIDQ5LFxuICAgICAgMTE1LFxuICAgICAgMTUsXG4gICAgICAxNTEsXG4gICAgICAxMjUsXG4gICAgICAxMyxcbiAgICAgIDEyMSxcbiAgICAgIDIxNCxcbiAgICAgIDIxNyxcbiAgICAgIDIzOCxcbiAgICAgIDIxNCxcbiAgICAgIDIxOCxcbiAgICAgIDUsXG4gICAgICAxMzEsXG4gICAgICAxNjQsXG4gICAgICAxMDMsXG4gICAgICAyOSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU5NTkJQOU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQ0MTQ0MjUzNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5JS0tVXCIsXG4gICAgXCJsaWRcIjogXCIyMzEzNjk5ODg5NDQwOTI6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVR2MnY4R0VOT04wN0lHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0MHpmSzhjSEI5YkFkandYWEQ3RHByQTc3eWpDbkdOWGhTQUF2ZUZBWXhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImQ4MTBxK2t5aTF2QXk5NTlWWVVtSFVYdDNleG0wbTcrTlNzSDlESlU1MDlFZmt3RUZEbWZ4STJ4N3JWUVdvQTQya1R6VXR0bmVCbVNVNkl4Umo3dkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZnVWJRYmp2WGFkM2JKRVVyTGd1T0gxWnk1Tk1xZzRSN0prVTZSc1NQUTZDTkNWTzFOK1VkRy8vbVNSTDg5RzQ1cjdGL0IxUjFWeU1XNUpmcDJVK2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzQ0MTQ0MjUzNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4MzE5NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMY3VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxjdS5qc29uIjogIntcImtleURhdGFcIjpcIm9XL1F1MG8rUXh0c2lmMWVPaW5Ca2ZETkhhK3NGRk9jSW5IeXgyN21ISWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3ODQzOTg3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NjI1OTQwODMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ANYA",
  packname: process.env.PACK_NAME || "ANYA",
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
