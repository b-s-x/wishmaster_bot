require('dotenv').config();
import { Context, Telegraf } from 'telegraf'
import FilmController from './controllers/filmController';

const film = new FilmController();
const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

console.log(1111111, FilmController);

const bot = new Telegraf<Context>(token);

bot.use(Telegraf.log());
bot.command('films', FilmController.create());
bot.launch();