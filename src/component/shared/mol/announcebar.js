import React, { Component } from 'react';
import '../../../css/shared/mol/announcebar.css';

class AnnouncementBar extends React.Component {

    constructor () {
        super();
        this.state = {
            shown: true,
        };
    }

    toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

    render () {
        var shown = {
            display: this.state.shown ? "block" : "none"
        };
        
        var hidden = {
            display: this.state.shown ? "none" : "block"
        };

        return(

            <div className="Announcement" style={ shown }>
                <div className="annce-head">
                    <span>Announcement</span><a href="#" onClick={this.toggle.bind(this)}>x</a>
                </div>
                <div className="annce-body">
                    <span>
                        <b>Quick Survey:</b><br /><br /> Please Help us to improve our website! Click the link below.
                    </span><br /><br />
                    <a href="https://forms.gle/Hk3h3ovhGdzsqcyQ6">Survey</a>
                </div>
            </div>
        );
    }
    
} 

export default AnnouncementBar;