import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"

export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.author = data.author
    this.color = data.color
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.lastViewed = data.lastViewed == undefined ? new Date() : new Date(data.lastViewed)
  }

  get jotSidebarTemplate() {
    return `
    ${this.jotCount} 
    <div onclick="app.JotsController.setActiveJot('${this.id}')" class="bg bg-dark border border-light rounded shadow text-white p-2 selectable" role="button">
      <h5 style="color: ${this.color};" class="d-inline">${this.title}</h5>
      <p class="d-inline float-end">${this.CreatedDate}</p>
    </div>
    `
  }

  get activeJotTemplate() {
    return `
    <div class="text-white pb-3">
      <h5>${this.author}</h5>
      <h5 style="color:${this.color}">${this.title}</h5>
      <p>${this.CreatedDatAndTime}</p>
      <p>${this.LastViewedDateAndTime}</p>
      <hr/>
    </div>
    <form" class="text-end">
      <textarea class="form-control px-3" name="body" id="jot-body" cols="100" rows="23"
      placeholder="Write your thoughts here...">${this.body}</textarea>
      <button onclick="app.JotsController.updateJot()" class="btn btn-success text-white my-1">Save</button>
      <button onclick="app.JotsController.destroyJot()" class="btn btn-danger fs-5 float-end my-1"><i class="mdi mdi-delete-circle fs-5"></i></button>
    </form>
    `
  }

  get jotCount() {
    let jotAmount = AppState.jots.length
    console.log(jotAmount);
    return `
    <div>
      <div class="">Note Amount: ${jotAmount}</div>
    </div>
    `
  }

  get CreatedDate() {
    return this.createdAt.toLocaleDateString()
  }

  get CreatedTime() {
    return this.createdAt.toLocaleTimeString()
  }

  get CreatedDatAndTime() {
    return this.createdAt.toLocaleString()
  }

  get LastViewedDateAndTime() {
    return this.lastViewed.toLocaleString()
  }
}