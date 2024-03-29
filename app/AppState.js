import { Jot } from "./models/Jot.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {
  jots = [
    new Jot({
      title: 'Word to the Wise',
      author: 'Kyler',
      color: '#ff0022'
    })
  ]

  /**@type {Jot} */
  activeJot = null
}

export const AppState = createObservableProxy(new ObservableAppState())