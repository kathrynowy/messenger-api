import { Controller } from '../types/controller';


export const example: Controller = async(req, res, next) => {
  try {
    console.log('hennllo, example');
    res.json('hello, example');
    
  } catch (error) {
    next(error);
  }
};
