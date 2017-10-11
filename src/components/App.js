import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import {  Route, Router } from 'react-router-dom'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import SideBar from './SideBar/index'

import Source from './Map/Source'
import Layer from './Map/Layer'
import Basemap from './Map/BaseMap'
import Map from './Map/Map'

import './App.css'

injectTapEventPlugin()

class App extends Component {

  showSettings (event) {
  event.preventDefault();
}

  render() {

    return (
      <div className="content">
        <div className="content-wrapper">
          <div className="container-react">
            <SideBar />

            <div className="Map">
              <Map>
                <Source
                  id='sourceID'
                  url='mapbox://codyclarks.historic-data'
                  layer='codyclarks.historic-data'
                  >

                </Source>
                <Basemap
                />
              </Map>
            </div>
          </div>
          <section className="footer">
            <div className="footer-div">
              <a href="http://www.codyclark.co" target="_blank">Learn More About The Developer</a>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
