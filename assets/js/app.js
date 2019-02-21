// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";


class App extends Component {
    render() {
        return (

            <div>
                <Header />
            </div>

        )
    }
}

export default App


ReactDOM.hydrate(<App />, document.getElementById('root'))
// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
