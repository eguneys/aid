import express from 'express';
import routes from './routes';

export const app = express();

let router = routes();

app.use(router);


export function boot() {
  
}
