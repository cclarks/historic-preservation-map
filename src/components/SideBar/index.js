import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import './index.css'
import { CSSTransitionGroup } from 'react-transition-group'

import '../App.css'
import data from '../../assets/sites-data.json'
import AllSites from './AllSites'
import SiteAll from '../Sites/SiteAll'

let sortYears = function (a, b) {
  let nameA = (a.properties.YEARBUILT || '').toUpperCase();
  let nameB = (b.properties.YEARBUILT || '').toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
}

let sortNames = function(a, b) {
  let nameA = a.properties.SITENAME.toUpperCase(); // ignore upper and lowercase
  let nameB = b.properties.SITENAME.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
}

let sortAddresses = function(a, b) {
  let nameA = (a.properties.ADDRESS || '').toUpperCase(); // ignore upper and lowercase
  let nameB = (b.properties.ADDRESS || '').toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
}

export default class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      sites: [],
      search: '',
      sort: 'site-name'
    }
  }

  updateSearch = (event) => {
    console.log(event.target.value)
    this.setState({search: event.target.value.substr(0, 30)})
  }

  setSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    let {features} = data
    let filterSites = features.filter(
      (site) => {
        return (
          site.properties.SITENAME.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          (site.properties.ADDRESS || '').toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          (site.properties.YEARBUILT || '').toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        )
      }
    )

    switch (this.state.sort) {
      case 'year-built':
        filterSites.sort(sortYears);
        break;
      case 'address':
        filterSites.sort(sortAddresses);
        break;
      case 'site-name':
      default:
        filterSites.sort(sortNames);
        break
    }

    return (
      <div className="about">
        <div className="sidepanel">
          <div className="wrapper">
            <Route render={({ location }) => (
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  <Switch location={location} key={location.key}>
                    <Route exact path="/" render={() => (
                      <AllSites
                        search={this.state.search}
                        updateSearch={this.updateSearch}
                        setSort={this.setSort}
                        filterSites={filterSites}
                      />
                    )} />
                    <Route
                      path="/sites/:siteId"
                      component={SiteAll}
                    />
                </Switch>
              </CSSTransitionGroup>
            )}/>
          </div>
        </div>
      </div>
    )
  }
}
