import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Deviation, Store, Inject } from 'deviation'

import { AppComponent } from './AppComponent'
import { CountDownStore } from './CountDownStore'

ReactDOM.render(
  <Deviation providers={[CountDownStore]}>
    <AppComponent />
  </Deviation>,
  document.getElementById('root')
)
