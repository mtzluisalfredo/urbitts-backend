import { query, body } from 'express-validator';

export const listParkingRules = [
  query('page').optional().isInt().toInt(),
  query('perPage').optional().isInt().toInt(),
];

export const createParkingRules = [
  body('name').isLength({ max: 140 }).exists(),
];
