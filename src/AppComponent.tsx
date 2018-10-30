import * as React from 'react'
import { Store, Inject } from 'deviation'

import { CountDownStore } from './CountDownStore'

import './AppComponent.css'

export interface IAppComponentProps {
  countDownStore?: CountDownStore
}

@Inject({
  countDownStore: CountDownStore
})
export class AppComponent extends React.Component<IAppComponentProps> {
  get countDownStore() {
    return this.props.countDownStore
  }

  render() {
    const { days, hours, minutes, seconds } = this.countDownStore

    return (
      <div className="background">
        <p>
          {days} d : {hours} h : {minutes} m : {seconds} s
        </p>
      </div>
    )
  }
}
