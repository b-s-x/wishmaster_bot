import knex from 'knex';
import { mode } from '../config';
import knexConfig from './knexfile';

const db = knex(knexConfig[mode]);

export default db;
