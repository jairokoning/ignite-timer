import { Cycle } from './reducer'

export enum ActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  SET_CURRENT_CYCLE_AS_FINISHED = 'SET_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function setCurrentCycleAsFinishedAction() {
  return {
    type: ActionsTypes.SET_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionsTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
