export class FilmController {
  async create(ctx) {
    const text = ctx.message.text.replace(/\/film/gi, '').trim();
    console.log(text);
  }
  // async getAll(req, res) {
  // }

}

export default new FilmController();
