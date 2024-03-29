import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";


class JotsService {

  createJot(jotData) {
    const newJot = new Jot(jotData)
    console.log(newJot);
    AppState.jots.push(newJot)
    //save here
  }

  setActiveJot(jotId) {
    const foundJot = AppState.jots.find(jot => jot.id == jotId)
    foundJot.lastViewed = new Date()
    //save here
    AppState.activeJot = foundJot
  }

  updateJot(newJotBody) {
    const jot = AppState.activeJot
    jot.body = newJotBody
    //save here
  }

  destroyJot() {
    const jotId = AppState.activeJot.id
    AppState.activeJot = null
    const indexOfJotToRemove = AppState.jots.findIndex(jot => jot.id == jotId)
    if (indexOfJotToRemove == -1) {
      return
    }
    AppState.jots.splice(indexOfJotToRemove, 1)
    //save here
  }

  saveJots() {

  }

}

export const jotsService = new JotsService()