require('dotenv').config();
import { Context, Telegraf } from 'telegraf'
import FilmController from './src/controllers/filmController';
import { token } from './src/config';

if (token === undefined) throw new Error('BOT_TOKEN must be provided!');
const bot = new Telegraf<Context>(token);

bot.command('film', FilmController.create);
bot.launch();