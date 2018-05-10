import React, {Component} from 'react'
import CommentsList from './CommentsList'


export default class Article extends Component{
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

  }
  render(){
    const {article} = this.props
    const {isOpen} = this.state
    return(
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toogleOpen}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){ //view and close text article
    if (!this.state.isOpen) return null
    const {article} = this.props
    return (
      <section>
        {article.text}
        <CommentsList comments = {article.comments} />
      </section>
    )
  }

  toogleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
