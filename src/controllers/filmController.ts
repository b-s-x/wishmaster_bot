import { Context } from 'telegraf';
import DBController from '../db/DBcontroller';

export class FilmController {
  async create(ctx: Context, msg: string) {
    const text = msg.replace(/\/film/gi, '').trim();
    console.log(text);
    await DBController.insertFilm(text);
    console.log('success');
    ctx.reply('success')
  }
  // async getAll(req, res) {
  // }

}

export default new FilmController();
