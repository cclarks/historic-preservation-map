import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import {  Route, Router } from 'react-router-dom'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import SideBar from './Header/index.js'
import Source from './Source'
import Layer from './Layer'
import Basemap from './BaseMap'
import Home from './Home/index.js'
import Map from './Map'
import About from './About/index.js'
// import Checkbox from 'material-ui/Checkbox'

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
        <div id="outer-container">
          <main id="page-wrap">
            <SideBar />
            <Home />
              {/* <Router>
                <Route path="/" component={Home} />
                <Route path="about" component={Map}/>
                <Route path="map" />
              </Router> */}
            {/* <Map>
               <Source
                 id='sourceID'
                 url='mapbox://aliceatd2d.1skjaazb'
                 layer='railwayLines-2es0gk'
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
                 <Layer
                   id='fill-layer'
                   type='fill'
                   paint={{
                     'fill-color': 'purple'
                   }}
                   sliderValue={this.state.sliderValue}
                   isLayerChecked={this.state.purple.isLayerChecked}
                 />
               </Source>
               <Basemap
                 isLayerChecked={this.state.orange.isLayerChecked}
               />
             </Map> */}
           <section className="footer">
             <div className="footer-div">
               <a href="/home">Home</a>
               <a href="/map">Map</a>
               <a href="/about">About</a>
             </div>
           </section>
        </main>
      </div>
    )
  }
}

export default App
