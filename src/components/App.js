import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import {  Route, Router } from 'react-router-dom'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import SideBar from './SideBar/index.js'

import Source from './Map/Source.js'
import Layer from './Map/Layer.js'
import Basemap from './Map/BaseMap.js'
import Map from './Map/Map.js'

import './App.css'

injectTapEventPlugin()

class App extends Component {
  showSettings (event) {
  event.preventDefault();
}

  state = {
    sliderValue: 0.5,
    teal: {
      isLayerChecked: true
    },
    purple: {
      isLayerChecked: false
    },
    orange: {
      isLayerChecked: false
    }
  }

  render() {
    return (
      <div class="content">
        <div class="container-react">
          <SideBar />

          <div class="Map">
            <Map>
               <Source
                 id='sourceID'
                 url='mapbox://codyclarks.historic-data'
                 layer='codyclarks.historic-data'
               >
                 <Layer
                   id='line-layer'
                   type='line'
                   paint={{
                     'line-color': 'teal'
                   }}
                   sliderValue={this.state.sliderValue}
                   isLayerChecked={this.state.teal.isLayerChecked}
                 />
                 {/* <Layer
                   id='fill-layer'
                   type='fill'
                   paint={{
                     'fill-color': 'purple'
                   }}
                   sliderValue={this.state.sliderValue}
                   isLayerChecked={this.state.purple.isLayerChecked}
                 /> */}
               </Source>
               <Basemap
                 isLayerChecked={this.state.orange.isLayerChecked}
               />
             </Map>
          </div>
        </div>
        <section className="footer">
          <div className="footer-div">
            <a href="/home">Home</a>
            <a href="/about">About</a>
          </div>
        </section>
      </div>
    )
  }
}

export default App