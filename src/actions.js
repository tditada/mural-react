import {  CREATE_STICKY_NOTE } from './constants'

export const createNote = (posX, posY, target) => ({ type: CREATE_STICKY_NOTE, payload: {'posX': posX, 'posY': posY, 'target': target}})