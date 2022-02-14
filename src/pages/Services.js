import React, {Component} from 'react'
import client from './Client'
import loader from '../images/loader.gif'


class Services extends Component {
constructor(){
    super()
    this.state = {servicepage : []}
}

componentDidMount(){
    client.getEntries({
        'content_type': "services", 
        'order': 'sys.createdAt',
    })
    .then( (entries) => {
      this.setState({servicepage : entries.items})
    })
}
    
    render(){
        return(
         <div>
             <section id="services" className="p-4">
             <div className="container">
                <h2 className="text-center">Our Services</h2>
                <p className="lead">
                Pellentesque accumsan, augue ac suscipit gravida, felis felis bibendum augue, et condimentum magna lorem non lacus. 
                </p>
            </div>

            {this.state.servicepage.length === 0 ?
            <div align="center"><img src={loader} alt="loader"/></div>
        
             :
            <div className="row">

                {this.state.servicepage.map((item, index) => {
                    return(
                <div key={index} className="col-md-4">
                    <div className="media service-wrap">
                        <img className="mr-3" src={item.fields.serviceIcon.fields.file.url} alt=""/>
                    <div className="media-body">
                        <h3 className="media-heading">{item.fields.serviceTitle}</h3>
                        <p>{item.fields.serviceDescription}</p>
                    </div>
                    </div>
                </div>
                    )
                 }
              
                )}
              
            </div>
            }
             </section>
         </div>
        )
    }
}

export default Services