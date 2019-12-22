import React, { Component } from 'react'
import 'components/Topbar/Topbar.scss'
import { Link } from 'react-router-dom'

export default class Topbar extends Component {
  render() {
    return (
      <div className="c-topbar">
        <Link 
          to={`/`}
          className="c-topbar__link">
            <span className="c-topbar__arrow-left"></span>
            Back to Articles
        </Link>
      </div>
    )
  }
}