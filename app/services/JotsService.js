import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";


class JotsService {

  createJot(jotData) {
    const newJot = new Jot(jotData)
    console.log(newJot);
    AppState.jots.push(newJot)
    this.saveJots()
  }

  setActiveJot(jotId) {
    const foundJot = AppState.jots.find(jot => jot.id == jotId)
    foundJot.lastViewed = new Date()
    this.saveJots()
    AppState.activeJot = foundJot
  }

  updateJot(newJotBody) {
    const jot = AppState.activeJot
    jot.body = newJotBody
    this.saveJots()
  }

  destroyJot() {
    const jotId = AppState.activeJot.id
    AppState.activeJot = null
    const indexOfJotToRemove = AppState.jots.findIndex(jot => jot.id == jotId)
    if (indexOfJotToRemove == -1) {
      return
    }
    AppState.jots.splice(indexOfJotToRemove, 1)
    this.saveJots()
  }

  saveJots() {
    saveState('jots', AppState.jots)
  }

  loadJots() {
    const jotsFromStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromStorage
  }
}

export const jotsService = new JotsService()