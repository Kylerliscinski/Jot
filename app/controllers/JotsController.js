import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {
  constructor() {
    AppState.on('jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJot);
    jotsService.loadJots()
  }

  drawJots() {
    let jotContent = ''
    AppState.jots.forEach(jot => jotContent += jot.jotSidebarTemplate)
    setHTML('jot-container', jotContent)
  }

  drawActiveJot() {
    const jot = AppState.activeJot
    if (jot == null) {
      setHTML('activeJot', '')
    } else {
      setHTML('activeJot', AppState.activeJot.activeJotTemplate)
    }
  }

  createJot() {
    event.preventDefault()
    console.log('creating jot');
    const form = event.target
    const jotFormData = getFormData(form)
    console.log('here is the data', jotFormData);
    jotsService.createJot(jotFormData)
    // @ts-ignore
    form.reset()
  }

  setActiveJot(jotId) {
    console.log('setting active jot', jotId);
    jotsService.setActiveJot(jotId)
  }

  updateJot() {
    const jotElem = document.getElementById('jot-body')
    console.log(jotElem);
    //@ts-ignore
    const textFromTextArea = jotElem.value
    jotsService.updateJot(textFromTextArea)
    window.alert("Note Saved!")
  }

  destroyJot() {
    const jotToDestroy = window.confirm("Are you sure you want to delete this jot?")
    if (jotToDestroy == false) {
      return
    }
    jotsService.destroyJot()
  }
}