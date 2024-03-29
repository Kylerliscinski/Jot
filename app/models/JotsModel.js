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
}