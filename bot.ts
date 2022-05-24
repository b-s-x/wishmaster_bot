require('dotenv').config();
import { Context, Telegraf } from 'telegraf';
import { token } from './src/config';
import botModule from './src/botModule';

if (token === undefined) throw new Error('BOT_TOKEN must be provided!');
const bot = new Telegraf<Context>(token);

bot.catch((err: Error) => console.log(err.message, err))
  .use(botModule)
  .launch();