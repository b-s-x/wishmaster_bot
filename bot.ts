require('dotenv').config();
import { Context, Telegraf } from 'telegraf'
import FilmController from './src/controllers/filmController';

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf<Context>(token);

bot.use(Telegraf.log());
bot.command('films', ctx => FilmController.create(ctx));
bot.launch();