import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './submit.css'

class Submit extends PureComponent {

    render() {

        return (
            <div class="form">
           

            <h1> APPLY FOR THE POSITION OF PURCHASING ASSISTANT </h1>

            <h2> Personal Details * </h2>

            <nav>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <br/>
            <input type="checkbox" name="sex" value="male"></input>Male
            <input type="checkbox" name="sex" value="female"></input>Female
            <input type="checkbox" name="sex" value="female"></input>Prefer not to say
                   
            <br/>
            Birthday:
            <input type="date" name="bday"></input>
                    <input type="submit"></input>
            </nav>
            </div>
        )
    }
}

export default Submit