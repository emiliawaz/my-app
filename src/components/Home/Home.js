import React, { Component } from 'react'
import 'components/Home/Home.scss'
import formatDate from 'services/dates.js'
import ArticlesListItem from 'components/ArticlesListItem/ArticlesListItem'
import { api } from 'api'
import qs from 'qs'

export default class Home extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    api.get('/delivery/v1/search', {
      params: {
        q: '*:*',
        defType: 'edismax',
        indent: 'off',
        qf: 'id name^20 type^10 creator lastModifier text text_ar text_cjk text_da text_de text_el text_en text_es text_fi text_fr text_he text_hi text_it text_ja text_nl text_no text_pl text_pt text_pt_br text_ru text_sv text_th text_tr text_zh_cn',
        wt: 'json',
        fq: ['classification:(content)', 'type:("article")', 'isManaged:("true")', 'libraryId:(default)'],
        sort: 'lastModified desc'
      },
      paramsSerializer: function(params) {
        return qs.stringify(params, { indices: false })
      }
    }
    ).then(response => {
      let articlesArray = []

      for(let document of response.data.documents) {
        document.created = formatDate(document.created)
        articlesArray.push(document)
      }
      this.setState({ articles: articlesArray })
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div className="c-home">
        <h1>Articles List</h1>
        <ul className="c-home__list">
          { this.state.articles.map(article =>
            <li
              className="c-home__list-item"
              key={article.id}>
              <ArticlesListItem
                id={article.id}
                name={article.name}
                description={article.description}
                created={article.created}
                tags={article.tags ? article.tags : null}/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}