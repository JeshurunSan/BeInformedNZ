import React from 'react';
import '../../../css/shared/mol/subscribe.css';

const Subscribe = () => {
    return (
        <div className="Subscribe">
            <span>Want to receive an exclusive news from our website? Subscribe to our Newsletter!</span>
            <form className="SubscribeFunction">
                <input type="text" placeholder="Subscribe"></input>
                <button>Subscribe</button>
            </form>
        </div>
    );
}

export default Subscribe;