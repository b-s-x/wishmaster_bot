import db from './db';

class DBController {
  async insertFilm (filmName: string) {
    await db('films')
      .insert({ filmName })
      .then(() => console.log("data inserted"))
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
        db.destroy();
      });
  }
};

export default new DBController();
