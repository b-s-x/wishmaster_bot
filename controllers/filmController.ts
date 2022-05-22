import { Context } from 'telegraf'

export class FilmController extends Context {
  async create(ctx) {
    const text = ctx.update.message.text.replace(/\/films/gi, '').trim();
    console.log(text);
  }

  // async getAll(req, res) {
  // }

}

export default FilmController;