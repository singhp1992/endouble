import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './submit.css'

class Submit extends PureComponent {

    render() {

        return (
            <div class="submit">
           

            <h1> APPLY FOR THE POSITION OF PURCHASING ASSISTANT </h1>

            <h2> Personal Details * </h2>

            <form class="form">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <br/>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Country"></input>
            <input type="text" placeholder="Zipcode"></input>
            <select>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
                <option value="Male">Prefer not to say</option>
            </select>
            <br/>
            Date of Birth: 
            <input type="date" name="bday"></input>
            <br/>
            <input type="email" placeholder="Email" name="email"></input>
            </form>
                <button type="submit">Submit</button>
            </div>
        )
    }
}

export default Submit