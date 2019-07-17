import { Controller } from '../types/controller';
import { dialogueHelper } from '../db/helpers'

export const addDialogue: Controller = async(req, res, next) => {
  try {
    const dialogue = await dialogueHelper.create(req.body);

    res.json(dialogue);
  } catch (error) {
    next(error);
  }
};

export const getDialogues: Controller = async(req, res, next) => {
  try {
    res.json(await dialogueHelper.getAll());
  } catch (error) {
    next(error);
  }
};
