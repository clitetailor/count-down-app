import * as React from 'react'
import { Store } from 'deviation'

export interface ICountDownStoreState {
  now: Date
  schedule: Date
}

function normalize(a) {
  const n = Math.floor(a)
  return n < 10 ? (n > 0 ? `0${n}` : '00') : `${n}`
}

export class CountDownStore extends Store<{}, ICountDownStoreState> {
  state = {
    now: new Date(),
    schedule: new Date('2018-11-17')
  }

  interval: number

  storeDidMount() {
    this.interval = setInterval(() => {
      this.setState({ now: new Date() })
    }, 1000)
  }

  get days() {
    const { now, schedule } = this.state
    return normalize((schedule.getTime() - now.getTime()) / 86400000)
  }

  get hours() {
    const { now, schedule } = this.state
    return normalize(((schedule.getTime() - now.getTime()) / 3600000) % 24)
  }

  get minutes() {
    const { now, schedule } = this.state
    return normalize(((schedule.getTime() - now.getTime()) / 60000) % 60)
  }

  get seconds() {
    const { now, schedule } = this.state
    return normalize(((schedule.getTime() - now.getTime()) / 1000) % 60)
  }
}
