import React from 'react';
import { Link } from 'react-router-dom';

import '../../../css/shared/atm/createarticle.css';

const CreateArticle = () => {
    return(
        <div className="btn-create-article">
        <Link to="/create"><button>Create Article</button></Link>
        </div>
    );
}

export default CreateArticle;