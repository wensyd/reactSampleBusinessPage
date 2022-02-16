import React, {Component} from 'react'
import client from './Client'
import {Link} from 'react-router-dom'
import BlackLoader from '../images/black-loader.gif'


class Blogs extends Component {
     constructor(){
         super()
         this.state = {blogpage: []}
     }
     componentDidMount(){
        client.getEntries({
         content_type : 'blogs',
         order: 'sys.createdAt'
        })
        .then((entries) => {
          this.setState({blogpage : entries.items});
          console.log(entries.items)
        });
     }

    render(){
        return(
            <div>
               <section id="blogs" className="pt-4">
                   <div className="container-fluid">
                       <div className="text-center">
                        <h2>Blogs</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam at odio sed pharetra.</p>
                       </div>
                       {this.state.blogpage.length === 0 ? 
                    <div align="center" className="pt-5"> <img src={BlackLoader} alt="loader"/> </div>
                    :
                       <div className="row">

                           {this.state.blogpage.map((item, index) => {
                                return(
                           <div key={index} className="col-md-6 blog-content">
                               <img src={item.fields.blogThumbnail.fields.file.url} className="img-blog img-fluid" alt=""/>
                               <h3><Link to={`../blogs/${item.fields.slug}`}>{item.fields.blogTitle}</Link></h3>
                               <p>{item.fields.blogDescription}</p>
                               <button className="btn btn-primary"><Link to={`../blogs/${item.fields.slug}`}>Read more</Link></button>
                           </div>
                           )
                           } 
                           )}

                       </div>
                        }
                   </div>
               </section>
            </div>
        )
    }
}

export default Blogs