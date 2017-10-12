import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import data from '../../assets/sites-data.json'
import AllSites from '../SideBar/AllSites'
import './SiteAll.css'


export default class SiteAll extends Component {

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
                <a href={AllSites}><i className="fa fa-2x fa-chevron-left" aria-hidden="true"></i></a>
              </div>
            </Link>
          </div>
          <div className="all-info">
              <h1 key={site.properties.SITEID}>{site.properties.SITENAME}</h1>
              <div className="description-secondary">

                <div className="site-descript-title">
                  <h3>Address: </h3>
                </div>
                <span className="site-descript addr">
                  {site.properties.ADDRESS}
                </span>
                <div className="site-descript-title">
                  <h3>Year Built: </h3>
                </div>
                <span className="site-descript yearbuilt">
                  {site.properties.YEARBUILT}
                </span>
                <div className="site-descript-title">
                  <h3>Style: </h3>
                </div>
                <span className="site-descript style">
                  {site.properties.STYLE}
                </span>
                <div className="site-descript-title">
                  <h3>Description: </h3>
                </div>
                <span className="site-descript descript">
                  {site.properties.DESCRIPT}
                </span>
                <div className="site-descript-title">
                  <h3>Destroyed: </h3>
                </div>
                <span className="site-descript destroyed">
                  {site.properties.DESTROYED}
                </span>
                <div className="site-descript-title">
                  <h3>Survey Number: </h3>
                </div>
                <span className="site-descript survey-num">
                  {site.properties.SURVEYNUM}
                </span>
                <div className="site-descript-title">
                  <h3>Architect: </h3>
                </div>
                <span className="site-descript architect">
                  {site.properties.ARCHITECT}
                </span>
                <div className="site-descript-title">
                  <h3>Survey Value: </h3>
                </div>
                <span className="site-descript surveval">
                  {site.properties.SURVEVAL}
                </span>
                <div className="site-descript-title">
                  <h3>Survey Distance: </h3>
                </div>
                <span className="site-descript survedist">
                  {site.properties.SURVEDIST}
                </span>
                <div className="site-descript-title">
                  <h3>Shpoe Value: </h3>
                </div>
                <span className="site-descript shpoeval">
                  {site.properties.SHPOEVAL}
                </span>
                <div className="site-descript-title">
                  <h3>D NR Listed: </h3>
                </div>
                <span className="site-descript d-nrlisted">
                  {site.properties.D_NRLISTED}
                </span>
                <div className="site-descript-title">
                  <h3>Plot Method: </h3>
                </div>
                <span className="site-descript plotmthd">
                  {site.properties.PLOTMTHD}
                </span>
                <div className="site-descript-title">
                  <h3>FGDLAQ Date: </h3>
                </div>
                <span className="site-descript fglaqdate">
                  {site.properties.FGDLAQDATE}
                </span>
                <div className="site-descript-title">
                  <h3>Auto ID: </h3>
                </div>
                <span className="site-descript autoid">
                  {site.properties.AUTOID}
                </span>
                <div className="site-descript-title">
                  <h3>FID City: </h3>
                </div>
                <span className="site-descript fid-city-l">
                  {site.properties.FID_CITY_L}
                </span>
                <div className="site-descript-title">
                  <h3>Ext Plan: </h3>
                </div>
                <span className="site-descript ext-plan">
                  {site.properties.EXTPLAN}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCSYS1: </h3>
                </div>
                <span className="site-descript strucsys1">
                  {site.properties.STRUCSYS1}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCSYS2: </h3>
                </div>
                <span className="site-descript strucsys2">
                  {site.properties.STRUCSYS2}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCSYS3: </h3>
                </div>
                <span className="site-descript strucsys3">
                  {site.properties.STRUCSYS3}
                </span>
                <div className="site-descript-title">
                  <h3>EXTFABRIC1: </h3>
                </div>
                <span className="site-descript extfabric1">
                  {site.properties.EXTFABRIC1}
                </span>
                <div className="site-descript-title">
                  <h3>EXTFABRIC1: </h3>
                </div>
                <span className="site-descript extfabric2">
                  {site.properties.EXTFABRIC2}
                </span>
                <div className="site-descript-title">
                  <h3>EXTFABRIC1: </h3>
                </div>
                <span className="site-descript extfabric3">
                  {site.properties.EXTFABRIC3}
                </span>
                <div className="site-descript-title">
                  <h3>EXTFABRIC1: </h3>
                </div>
                <span className="site-descript extfabric4">
                  {site.properties.EXTFABRIC4}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCTURE USE 1: </h3>
                </div>
                <span className="site-descript strucuse1">
                  {site.properties.STRUCUSE1}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCTURE USE 2: </h3>
                </div>
                <span className="site-descript strucuse2">
                  {site.properties.STRUCUSE2}
                </span>
                <div className="site-descript-title">
                  <h3>STRUCTURE USE 3: </h3>
                </div>
                <span className="site-descript strucuse3">
                  {site.properties.STRUCUSE3}
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
