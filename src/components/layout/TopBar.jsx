import React from 'react'
import { connect } from 'react-redux'


const TopBar = () => {

    return (
        <div class="container">

            <img src="add image here" alt="logo" class="logo" />

            <nav>
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
