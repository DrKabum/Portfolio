import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faEarthAsia
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEarthAsia)

ReactDOM.render(
    <App />,
    document.getElementById("app")
)