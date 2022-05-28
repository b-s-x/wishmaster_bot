import db from './db';

class DBController {
  async insertFilm (name: string) {
    await db('films')
      .insert({ name })
      .then(() => console.log("data inserted"))
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
        db.destroy();
      });
  }

  async getAllFilms () {
    return await db('films');
  }
};

export default new DBController();
