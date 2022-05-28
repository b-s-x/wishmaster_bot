import { Composer } from 'telegraf';
import FilmController from './controllers/filmController';

export const bot = new Composer();
bot.command('film', ctx => FilmController.create(ctx, ctx.message.text));
bot.command('films', ctx => FilmController.getAll(ctx));

export default bot;
