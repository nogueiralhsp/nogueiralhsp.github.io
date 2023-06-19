import React from 'react'

import validator from 'validator'
import { FaRegEnvelopeOpen } from 'react-icons/fa'

class ContactPage extends React.Component {

     constructor(props) {
          super(props)
          this.state = {
               name: '',
               email: '',
               message: '',
               messageValidator: false,
               fillUpMessage: 'Please fill this fields',
               messageSent: false,
          }

          this.handleNameChange = this.handleNameChange.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handleMessageChange = this.handleMessageChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleNameChange(e) {
          this.setState({ name: e.target.value });
     }

     handleEmailChange(e) {
          this.setState({ email: e.target.value });
     }

     handleMessageChange(e) {
          this.setState({ message: e.target.value });
     }

     handleSubmit(e) {
          e.preventDefault();

          if (validator.isEmail(this.state.email)) {
               var myHeaders = new Headers();
               myHeaders.append("Content-Type", "application/json");

               var raw = JSON.stringify({ ...this.state });

               var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
               };

               fetch("https://nogueiralhspcontactrequest.herokuapp.com/mail", requestOptions)

               this.setState({ messageSent: true })
          } else {
               console.log(this.state.messageValidator);
               this.setState({ messageValidator: true })
               this.setState({ messageSent: false })
          }
     }



     render() {
          return (
               <div className="contact-page-content">

                    <div className="contact-page-left-container">
                         <FaRegEnvelopeOpen className="left-container-icon" />
                         <p>If you would like, please leave your detail and I will get back to you</p>
                    </div>

                    <div className="contact-page-form-container">

                         <form className="contact-form" onSubmit={this.handleSubmit}>
                              {this.state.messageValidator && this.state.fillUpMessage}
                              <input
                                   placeholder="Name"
                                   type="text"
                                   name="name"
                                   onChange={this.handleNameChange}
                                   disabled={this.state.messageSent}
                              />
                              {this.state.messageValidator && this.state.fillUpMessage}
                              <input
                                   placeholder="email"
                                   type="text"
                                   name="email"
                                   onChange={this.handleEmailChange}
                                   disabled={this.state.messageSent}
                              />
                              {this.state.messageValidator && this.state.fillUpMessage}
                              <textarea
                                   name="message"
                                   id=""
                                   cols="30"
                                   rows="10"
                                   placeholder="message"
                                   onChange={this.handleMessageChange}
                                   disabled={this.state.messageSent}
                              />
                              {!this.state.messageSent ?
                                   <input
                                        type="submit"
                                        value="Submit"
                                   />
                                   :
                                   <h3> <br /> Thank you for your contact, I'll get back to you shortly</h3>
                              }
                         </form>
                    </div>

               </div>
          )
     }
}

export default ContactPage