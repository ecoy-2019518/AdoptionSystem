import express from 'express'
import { testA, registerA } from './animal.controller.js';

const api = express.Router();

api.post('/testA', testA)
api.post('/registerA', registerA)


export default api