import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <div>
               <section>
                   <div className="container-fluid">
                       <div className="text-center">
                       <h2>Drop your message</h2>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam at odio sed pharetra.</p>
                       </div>
                       <div className="container-fluid contact-form">
                       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSckq1XKa-2nHbFNeGNZyyaEH6Srv8MDAy7yfmVdbNjd_t-qnw/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                       </div>

                   </div>
               </section>
            </div>
        )
    }
}

export default Contact