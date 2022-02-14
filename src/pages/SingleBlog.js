import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import client from './Client'
import { marked } from 'marked'
import BlackLoader from '../images/black-loader.gif'


class SingleBlog extends Component {
    constructor(){
        super()
        this.state = {article: []}
    }
    componentDidMount(){
        const slug = this.props.match.params.slug

        if(slug) {
            client.getEntries({
                content_type : 'blogs', 'fields.slug' : slug
                
              })
              .then((entries) => {
                this.setState({article : entries.items[0]}); 
              })
        }
     

    }

    getParsedMarkdown(blogDescription){
        return {
            __html:marked(blogDescription, {sanitize:true})
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/Blogs')
    }

    render(){
        return(

            <div>
            {this.state.article.length === 0 ?
                <div align="center" className="pt-5"> <img src={BlackLoader} alt="loader"/> </div>
                :
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mt-4">{this.state.article.fields.blogTitle}</h2>
                        <p dangerouslySetInnerHTML = {this.getParsedMarkdown(this.state.article.fields.blogDescription)}></p>
                        <p><Link to="#" onClick={this.redirectToTarget}>Back</Link></p>
                    </div>
                </div>
            </div>
            }
            </div>
        )
    }

}

export default SingleBlog