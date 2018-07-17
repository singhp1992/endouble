import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './submit.css'

class Submit extends PureComponent {

    render() {

        return (
            <div class="form">
           

            <h1> APPLY FOR THE POSITION OF PURCHASING ASSISTANT </h1>

            <h2> Personal Details * </h2>

            
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <br/>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Country"></input>
            <input type="text" placeholder="Zipcode"></input>
            <br/>
            <input type="checkbox" name="sex" value="male"></input>Male
            <input type="checkbox" name="sex" value="female"></input>Female
            <input type="checkbox" name="sex" value="female"></input>Prefer not to say    
            <br/>
            Date of Birth: 
            <input type="date" name="bday"></input>
                    <input type="submit"></input>
            <br/>
            <input type="email" placeholder="Email" name="email"></input>
           
            </div>
        )
    }
}

export default Submit