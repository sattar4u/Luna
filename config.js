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
global.scan = "SUHAIL_06_11_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2hrK25sclJBY1F6a3R3YlF1S1NERkEwYThHTmNqdFNEL1hYeER5RVBWYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1QzVm1wVTdTZWk5Q3JQZ1RBOTlfZ1wiLFxuICBcInBob25lSWRcIjogXCJiN2VhMzE4Ny1lYWRiLTQ4ZDUtOTE1Yi1iMjc0MjZiN2I2MjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMjIzLFxuICAgICAgMTY5LFxuICAgICAgMjMyLFxuICAgICAgNzUsXG4gICAgICA3OCxcbiAgICAgIDE0NCxcbiAgICAgIDI0MCxcbiAgICAgIDE2MCxcbiAgICAgIDE0MCxcbiAgICAgIDQyLFxuICAgICAgMTE2LFxuICAgICAgMTQzLFxuICAgICAgNDksXG4gICAgICAxOTAsXG4gICAgICAxMzcsXG4gICAgICA0LFxuICAgICAgMTM0LFxuICAgICAgMjgsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMDgsXG4gICAgICAxMzksXG4gICAgICAxNDQsXG4gICAgICAyMzYsXG4gICAgICAxNzYsXG4gICAgICA3OSxcbiAgICAgIDYsXG4gICAgICAxNSxcbiAgICAgIDYxLFxuICAgICAgOTgsXG4gICAgICA5MixcbiAgICAgIDQzLFxuICAgICAgMzEsXG4gICAgICAxMjIsXG4gICAgICAyMjIsXG4gICAgICAyMTksXG4gICAgICAxOSxcbiAgICAgIDIzMCxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWEY2V0FUN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NDQxNDQyNTM1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTmF0dXJhbGlzdFwiLFxuICAgIFwibGlkXCI6IFwiMjMxMzY5OTg4OTQ0MDkyOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QdjJ2OEdFSnVDeHJJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidDB6Zks4Y0hCOWJBZGp3WFhEN0RwckE3N3lqQ25HTlhoU0FBdmVGQVl4WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaQlBvNlBPam9sa2JHek9MMmcwMGpGeWNPWFNLeVY5aXMrMzRSNWtwdEFmR0JvblJYM0tEQ21jV0NKWkFJSnQ5dHBGazBYck5QTXlFeFQzY1cyNmtCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyN0ZTNlpWeWxodm9Ua0xRV0s1UVFrZWN6aEFtc2lIRWNJMEozdFcyZ1ZGbG1TUzVPdFQ4TDFVMXBNQWo5OU81OVBhRkhmQnlMS3Y3M0xMZEFkbHdDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0NDE0NDI1MzU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjE3NTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGNuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMY24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhZFJmMVJ6UlRUcFRmdXRuRkJEODZPWVBJTnVHZFk3KzB1cWtjdHR3OXRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzg0Mzk4NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
