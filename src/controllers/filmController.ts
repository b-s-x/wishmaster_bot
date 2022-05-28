import { Context } from 'telegraf';
import DBController from '../db/DBcontroller';
import { resultsToString } from '../utils';

interface IFilmController {
  create(ctx: Context, msg: string): void;
  getAll(ctx: Context): void;
}

export class FilmController implements IFilmController{
  async create(ctx: Context, msg: string) {
    const text = msg.replace(/\/film/gi, '').trim();
    try {
      await DBController.insertFilm(text);
    } catch (err) {
      console.error('FilmController:create', err);
    }
    ctx.reply('success')
  }

  async getAll(ctx: Context) {
    try {
      const data = await DBController.getAllFilms();
      const results = resultsToString(data);
      ctx.reply(results);
    } catch (err) {
      console.error('FilmController:getAll', err);
    }
  }
}

export default new FilmController();
