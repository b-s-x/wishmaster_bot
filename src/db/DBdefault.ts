import db from './db';

export const createTableFilm = async () => {
  await db.schema.createTable('films', (table) => {
    table.increments('id')
    table.string('filmName')
  }).then(() => console.log("table films created"))
    .catch((err) => { console.log(err); throw err });
};

export const createTableBook = async () => {
  await db.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('bookName')
  }).then(() => console.log("table books created"))
    .catch((err) => { console.log(err); throw err });
};
