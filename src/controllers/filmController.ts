export class FilmController {
  async create(ctx: any) {
    const text = ctx.update.message.text.replace(/\/film/gi, '').trim();
    console.log(text);
  }

  // async getAll(req, res) {
  // }

}

export default new FilmController();