import React from 'react';
import { Link } from 'react-router-dom';

import '../../../css/shared/atm/dbbutton.css';

const DBButton = () => {
    return(
        <div className="btn-dashboard">
        <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
    );
}

export default DBButton;