import React, { Component } from 'react';
import NavBar from './navbar';
import introPic from '../images/rayeLane.png'


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='home'>
                    <NavBar />
                    <div className='imgContainer'>
                        <img className='homeImage' src={introPic}></img>

                    </div>
                    <div className='intro'>
                        <p className='introItem'>Track films you've watched.</p>
                        <p className='introItem'>Save those you want to see.</p>
                        <p className='introItem'>Tell your friends what’s good.  </p>

                        <button className='start1'><a className='start2' href='/login'>GET STARTED — IT‘S FREE!</a>
                        </button>
                        <p className='introPs'>The social network for film lovers.</p>
                    </div>
                </div>

            </React.Fragment>




        );
    }
}

export default Home;