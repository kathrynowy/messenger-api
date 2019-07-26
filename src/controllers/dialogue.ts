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
    const { userId } = req.query;

    res.json(await dialogueHelper.getAll(userId));
  } catch (error) {
    next(error);
  }
};
