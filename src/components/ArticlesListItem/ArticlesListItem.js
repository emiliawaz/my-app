import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/ArticlesListItem/ArticlesListItem.scss'

export default class ArticlesListItem extends Component {
  render() {
    return (
      <div className="c-articles-list-item">
        <Link 
          to={`article/${this.props.id}`}
          className="c-articles-list-item__link">
          <div className="c-articles-list-item__content">
            <h2 className="c-articles-list-item__name">{ this.props.name }</h2>
            <h3>{ this.props.description }</h3>
            <h4 className="c-articles-list-item__date">{ this.props.created }</h4>
            { this.props.tags ? 
              <p className="test">
                Tags:
                { this.props.tags.map((tag, index) =>
                  <span 
                    key={ index }
                    className="c-articles-list-item__tag">
                    { tag }</span>
                )}
              </p>
            : ''}
          </div>
        </Link>
      </div>
    )
  }
}