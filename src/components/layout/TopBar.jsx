import React from 'react'
import { connect } from 'react-redux'


const TopBar = () => {

    return (

        <div class="container">
            <nav className="body-header">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Jobs</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Departments</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    
    )
}

export default TopBar
