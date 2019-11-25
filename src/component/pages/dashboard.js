import React from 'react';

import './../../css/pages/dashboardPage.css';
import Footer from './../shared/org/footer';

const Dashboard =()=> {
    return (
        <div className="Dashboard">
            <div className="jumbotron">
            <span>Admin Control</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin velit ut tellus vulputate, sit amet feugiat massa porttitor. Integer eget pulvinar sapien. Phasellus porta diam ut ante fringilla, at fermentum magna semper. Donec efficitur ante ac magna rhoncus hendrerit. Suspendisse pharetra lectus massa. Morbi dictum aliquam turpis, nec scelerisque elit tristique id. Nullam vel erat nulla.</p>
            </div>
            <div className="dashboard-content">
                
                    <div className="db-section">
                        <h1>Articles<button><i className="fa fa-plus"></i> create</button></h1>
                        <div className="db-container">
                            <div className="db-card">
                                <span>Article Title</span>
                                <button><i className="fa fa-check"></i></button>
                                <button><i className="fa fa-times"></i></button>
                                <button>edit</button>
                                <button>delete</button>
                            </div>
                            <div className="db-card">
                                <span>Article Title</span>
                                <button><i className="fa fa-check"></i></button>
                                <button><i className="fa fa-times"></i></button>
                                <button>edit</button>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="db-section">
                        <h1>Users</h1>
                        <div className="db-container">
                            <div className="db-card">
                                <span>User Details First Name Last Name</span>
                                <button>edit</button>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Dashboard;