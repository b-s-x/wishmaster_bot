import { Composer } from 'telegraf';
import FilmController from './controllers/filmController';

export const bot = new Composer();
bot.command('film', ctx => FilmController.create(ctx));

export default bot;
