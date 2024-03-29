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
    <div onclick="app.JotsController.setActiveJot(${this.id})" class="bg bg-dark border border-light rounded shadow text-white p-2 selectable" role="button">
      <h5 style="color: ${this.color};" class="d-inline">${this.title}</h5>
      <p class="d-inline float-end">${this.CreatedDate}</p>
    </div>
    `
  }

  get activeJotTemplate() {
    return `
    <div class="text-white px-5">
       <h4>${this.title}</h4>
       <h5>${this.author}</h5>
       <p>${this.createdAt}</p>
       <p>${this.lastViewed}</p>
    </div>
    <form onsubmit="app.JotsController.submitJot()" class="text-end">
      <textarea class="form-control" name="body" id="jot-body" cols="100" rows="31"
      placeholder="Write your thoughts here...">${this.body}</textarea>
      <button class="btn btn-success text-white">Save</button>
    </form>
    <div class="px-3">
      <button class="btn btn-danger fs-5"><i class="mdi mdi-delete-circle fs-5"></i></button>
    </div>
    `
  }

  get CreatedDate() {
    return this.createdAt.toLocaleDateString()
  }

  get CreatedTime() {
    return this.createdAt.toLocaleTimeString()
  }

  get LastViewedDateAndTime() {
    return this.lastViewed.toLocaleString()
  }
}