import { createTableBook, createTableFilm } from './DBdefault';

export default async () => {
  try {
    await createTableFilm();
  } catch (err) {
    console.error('createTableFilm', err);
  }

  try {
    await createTableBook();
  } catch (err) {
    console.error('createTableBook', err);
  }
}