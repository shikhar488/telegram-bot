const TelegramBot = require('node-telegram-bot-api');

//const Token = '8095276200:AAHTksIEamI1VLbswzubcy5GzzELnygU7Bo';
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();


const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});
// bot.on("message",(option)=>{
//     console.log("message recieved",option);


//     bot.sendMessage(option.chat.id,"hello how are u?");
// })

bot.onText(/\/joke/, async (option)=> {
    const response = await axios.get("http://www.official-joke-api.appspot.com/random_joke");
    console.log(response.data);

    const setup = response.data.setup;
    const punchline = response.data.punchline;
    bot.sendMessage(option.chat.id,setup + " ,  " + punchline);
})

