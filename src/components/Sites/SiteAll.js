import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import data from '../../assets/sites-data.json'
import AllSites from '../SideBar/AllSites'
import './SiteAll.css'


export default class SiteAll extends Component {
  constructor() {
    super()
  }

  render () {
    const site = data.features.find((site) => {
      return site.properties.SITEID === this.props.match.params.siteId
    })

    if (site) {
      return(
        <div className="container-description-site-all">
          <div className="header">
            <Link to={"/"}>
              <div className="back-button">
                <a href={AllSites}>I Class</a>
              </div>
            </Link>
          </div>
          <div className="all-info">
              <h1 key={site.properties.SITEID}>Site Name: {site.properties.SITENAME}</h1>
              <div className="description-secondary">
                <span className="site-descript addr">
                  <h3>Address: </h3> {site.properties.ADDRESS}
                </span>
                <span className="site-descript year-built">
                  <h3>Year Built: </h3> {site.properties.YEARBUILT}
                </span>
                <span className="site-descript style">
                  <h3>Style: </h3> {site.properties.STYLE}
                </span>
                <span className="site-descript descript">
                  <h3>Description: </h3> {site.properties.DESCRIPT}
                </span>
                <span className="site-descript destroyed">
                  <h3>Destroyed: </h3> {site.properties.DESTROYED}
                </span>
                <span className="site-descript survey-num">
                  <h3>Survey Number: </h3> {site.properties.SURVEYNUM}
                </span>
                <span className="site-descript architect">
                  <h3>Architect: </h3> {site.properties.ARCHITECT}
                </span>
                <span className="site-descript surveval">
                  <h3>Survey Value: </h3> {site.properties.SURVEVAL}
                </span>
                <span className="site-descript survedist">
                  <h3>Survey Distance: </h3> {site.properties.SURVEDIST}
                </span>
                <span className="site-descript shpoeval">
                  <h3>Shpoe Value: </h3> {site.properties.SHPOEVAL}
                </span>
                <span className="site-descript d-nrlisted">
                  <h3>D NR Listed: </h3> {site.properties.D_NRLISTED}
                </span>
                <span className="site-descript plotmthd">
                  <h3>Plot Method: </h3> {site.properties.PLOTMTHD}
                </span>
                <span className="site-descript fglaqdate">
                  <h3>FGDLAQ Date: </h3> {site.properties.FGDLAQDATE}
                </span>
                <span className="site-descript autoid">
                  <h3>Auto ID: </h3> {site.properties.AUTOID}
                </span>
                <span className="site-descript fid-city-l">
                  <h3>FID City: </h3> {site.properties.FID_CITY_L}
                </span>
                <span className="site-descript ext-plan">
                  <h3>Ext Plan: </h3> {site.properties.EXTPLAN}
                </span>
              </div>

          </div>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}
