/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import { useState} from 'react'
import Input from '../Input'
import {InputOnChangeProps} from '../../types'
import theme from '../../styles/theme'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
}

export default function ContactForm() {

    const [state, setState] = useState(initialState)

    const handleChange = ({name, value}: InputOnChangeProps) => {
        setState({...state, [name!]: value})
    }

    return (
        <div css={styles} className="container">
            <div className="row">
                <div className="col-df-4">
                    <div className="contact-detail">
                        <h4>Contact Me</h4>
                        <p>
                            If you have any questions for me or need to get my services, please email me using this form.
                            <br/>
                            Always welcome to me.
                            <br/>
                            <strong>Best Regards.</strong>
                        </p>
                    </div>
                </div>
                <div className="col-df-8">
                    <h4>Send me a message</h4>
                    <div className="row">
                        <div className="col-df-6">
                            <Input
                                name="firstName"
                                value={state.firstName}
                                onChange={handleChange}
                                label="First Name"
                            />
                        </div>
                        <div className="col-df-6">
                            <Input
                                name="lastName"
                                value={state.lastName}
                                onChange={handleChange}
                                label="Last Name"
                            />
                        </div>
                        <div className="col-df-6">
                            <Input
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                label="Email"
                            />
                        </div>
                        <div className="col-df-6">
                            <Input
                                name="phoneNumber"
                                value={state.phoneNumber}
                                onChange={handleChange}
                                label="Phone Number"
                            />
                        </div>
                        <div className="col-12">
                            <Input
                                name="subject"
                                value={state.subject}
                                onChange={handleChange}
                                label="Subject"
                            />
                        </div>
                        <div className="col-12">
                            <Input
                                name="message"
                                value={state.message}
                                onChange={handleChange}
                                label="Message"
                                multiline={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = css`
  width: 96%;
  margin: 50px auto;
  background-color: white;
  border-radius: ${theme.borderRadiusDefault};
  box-shadow: ${theme.shadow};
  
  .contact-detail{
    width: 100%;
    height: 100%;
    
    ${theme.MOBILE_MEDIA_QUERY}{
      border-bottom: ${theme.borderDefault};
      padding-bottom: 5px;
    }
    
    ${theme.MIN_MOBILE_MEDIA_QUERY}{
      border-right: ${theme.borderDefault};
      padding: 0 5px;
    }
  }
`