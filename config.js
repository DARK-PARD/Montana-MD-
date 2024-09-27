const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263789432940"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kenton2004:kenton2004@cluster0.8ywpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'xkenton0@gmail.com'
global.github = 'https://github.com/montanatech/montana-md-'
global.location = 'mutare zim'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '263789432940' 
global.devs = '263789432940';
global.website = 'https://github.com/montanatech/montana-md-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUl6ZmRLUWVIN2NsRCtES0Y2QXE0N1liOUE3WW1MQlNpaVFpM0xlUU5rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3p3clFpTjlURnFPdDQ3TVVXeE95a0pkS2RONHNoY3NiOUNlaW5TVUptOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRitkaFZtWGgrMlFPbWdtRU0xbVZybVZ6em5aOS9RZ015eFBsQll1ekZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZGErdHEzM1dEOW0vTTd3cWZ4cXk5T0JSZ3QrV01VNHl3VklWdUR0UTBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMejVPT3BWUU9tZ3dtczhuSkdIYmp2NFlMUW9Cb2YzeXFubUVSb0lkVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWaUVJRDVoTTNxKzNwbE01RHlLNWhLcFVvdVlQQmpjRjRHb1cxWHMxbmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hGdE9TMGdhemp3THA2TENTME5VMWs4MExwU1lPcm5NNHFLcTRqRENXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFl4WXVKakJIZk55cjFiK0xYblRTZlJOSXNjZllzRXhJTDFHUXZETDhRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFVmMxSjVWR1dhOWxtQWhJSEx4OVpBQVVZb3liaVhKS2N3c01MNnIxUHJwQW9mWHBnZWgwK1VXSE1XUWU3VUxhbVpiOUtoV0ZJWVFlZGNjMll2b2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6Iml0M29FZzBHbXF4b1pLSDNzYitEUUMwZW5nTStrUENReVU0MWhCaE52Q0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBTYnhodTZnUWtDaEF4SE0yVVVSRlEiLCJwaG9uZUlkIjoiZWVmMGNlMWItZTE5MC00ZDhjLTgxYzYtMWQ3MzQwM2M2NzFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZSanQ4cnlra1E1STBZUDhIMGh5N0dma2lMcz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkxqQ1hoMnVpY1dRWFlsT3Nac2xZcURVUWc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZXemlVUTZmM2N0d1lZUFNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHdoM0dJeGxaVTdqbUUrQ2xyeFMwNUs0cUI5OFIwWnBnT0dDM25NQTRnUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN1g2Y3RWWHpBdE43UFVBcmx3TjBZM2dKN2d3dW5lOXpRdC9uNlBrd3hReXNXcFlwd1J0SnZaNi9sUzRYOXlYMW9kZi9KMGRHREdQbU4zdllVSjd6QWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im9wOUgwd1psU21CNGhiWGdhYzFOZkVRcTc0SEZHN1NWTi9yREZReGxYVGV0RWp0UDVSVEFNV2IvRUdUN1h2am5pVE1peTVvQUNtS2ZJZ3diSGdEZGpRPT0ifSwibWUiOnsiaWQiOiIyNjM3ODk0MzI5NDA6NTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDc5NzA3MTY2MjMwMDM6NTJAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4OTQzMjk0MDo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJROElkeGlNWldWTzQ1aFBncGE4VXRPU3VLZ2ZmRWRHYVlEaGd0NXpBT0lFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc0Nzk1NDMsImxhc3RQcm9wSGFzaCI6IjJaTjZpdiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHR6In0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "MONTANA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MAGICAL-KX' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '!' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
