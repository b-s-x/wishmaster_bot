import { Composer, Context } from 'telegraf';
import FilmController from './controllers/filmController';

export const bot = new Composer();
bot.command('film', (ctx: Context) => FilmController.create(ctx));

export default bot;
