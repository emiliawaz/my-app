import React, { Component } from 'react'
import './Article.scss'
import { api, baseURL } from '../../api'
import formatDate from '../../services/dates.js'
import parse from 'html-react-parser'
import Image from 'react-graceful-image'
import Topbar from '../Topbar/Topbar'

export default class Article extends Component {
  state = {
    title: '',
    date: '',
    description: '',
    body: [],
    author: '',
    tags: [],
    thumbnailUrl: '',
    imageAlt: '',
    imageCredit: '',
    imageSource: ''
  }

  getData() {
    api.get(`/delivery/v1/content/${this.props.match.params.id}`).then(response => {
      const article = response.data
      
      this.setState({
        title: article.elements.heading.value,
        author: article.elements.author.value,
        body: article.elements.body.values,
        date: article.elements.date.value ? formatDate(article.elements.date.value) : null,
        description: article.description,
        tags: article.tags,
        thumbnailUrl: article.thumbnail.url,
        imageAlt: article.elements.mainImage.value.leadImageCaption.value,
        imageCredit: article.elements.mainImage.value.leadImageCredit.value,
        imageSource: article.elements.mainImage.value.leadImage.renditions ? `${baseURL}${article.elements.mainImage.value.leadImage.renditions.lead.source}` : ''
      })
    }).catch(e => console.log(e))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="c-article">
        <Topbar/>
        <div className="c-article__wrapper">
          { this.state.imageSource && this.state.imageSource.length ?
          <div>
            <Image
              src={this.state.imageSource} 
              alt={this.state.imageAlt ? this.state.imageAlt : ''}
              placeholderColor="#eee"
              height="624"
              width="1200"
              className="c-article__image"
            />
            { this.state.imageCredit && this.state.imageCredit.length ? 
              <p className="c-article__image-credit">&copy; {this.state.imageCredit}</p>
            : ''}
            </div>
          : ''}
          { this.state.title && this.state.title.length ?
            <h1 className="c-article__title">{this.state.title}</h1>
          : ''}
          { this.state.description && this.state.description.length ?
            <h2 className="c-article__description">{this.state.description}</h2>
          : ''}
          { this.state.body && this.state.body.length ? 
            this.state.body.map((element, index) =>
              <div 
                className="c-article__body"
                key={index}>
                { parse(element) }
              </div>
          ) : ''}
          { this.state.author && this.state.author.length ?
            <h3 className="c-article__author">{this.state.author}</h3>
          : ''}
          { this.state.date && this.state.date.length ?
            <p className="c-article__date">{this.state.date}</p>
          : ''}
          { this.state.tags && this.state.tags.length ? 
            <p className="c-article__tags">
              Tags:
              { this.state.tags.map((tag, index) =>
                <span 
                  className="c-article__tag"
                  key={ index }>{ tag }</span>
              )}
            </p>
          : ''}
        </div>
      </div>
    )
  }
}