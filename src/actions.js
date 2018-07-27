import {  CREATE_STICKY_NOTE, SELECT_NOTE, 	NO_SELECT } from './constants'

export const createNote = (posX, posY, target) => ({ type: CREATE_STICKY_NOTE, payload: {'posX': posX, 'posY': posY, 'target': target}})

export const selectNote = (id) => ({ type: SELECT_NOTE, payload: {'id': id} })

export const noSelect = (target) => ({ type: NO_SELECT, payload: target })