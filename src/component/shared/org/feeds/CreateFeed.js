import React, { Component } from "react";
import { connect } from "react-redux";
import { createFeed } from "../../../../store/actions/feedActions";
import { Redirect } from "react-router-dom";

import { storage } from "../../../../config/fbConfig";

import Header from "../header/header";

import "../../../../css/shared/CreateFeed.css";

class CreateFeed extends Component {
  state = {
    title: "",
    address: "",
    phone: "",
    website: "",
    content: "",
    image: null,
    url: "",
    progress: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitButton = e => {
    e.preventDefault();

    const sortingData = {
      title: this.state.title,
      address: this.state.address,
      phone: this.state.phone,
      website: this.state.website,
      content: this.state.content,
      url: this.state.url
    };
    this.props.createFeed(sortingData);
    this.props.history.push("/feed");
  };

  // Image Upload

  handleChangeImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = e => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....

        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container2">
        <div className="CreateFeed">
          <h1>Create Feed</h1>
          <form className="CreateFeed-form">
            
            <div className="create-left">
            <div className="input-field">
              <input type="text" id="title" onChange={this.handleChange} />
              <label htmlFor="title">Title</label>
            </div>

            <div className="input-field">
              <input type="text" id="address" onChange={this.handleChange} />
              <label htmlFor="address">Address</label>
            </div>

            <div className="input-field">
              <input type="tel" id="phone" onChange={this.handleChange} />
              <label htmlFor="phone">Phone number</label>
            </div>

            <div className="input-field">
              <input type="url" id="website" onChange={this.handleChange} />
              <label htmlFor="website">Web Site</label>
            </div>

            <div className="input-field">
              <textarea id="content" onChange={this.handleChange} />
              <label htmlFor="content">Feed Description</label>
            </div>
            <span className="cat-label">Categories</span>
            <select className="c-dropdown" id="category-dropdown" name="select">
              <option value="0">Select Category...</option>
              <option value="1">Destination</option>
              <option value="2">Ethnic Foods</option>
              <option value="3">Activities</option>
              <option value="4">Culture</option>
              <option value="5">Rules and Regulations</option>
              <option value="6">Ethnic Foods</option>
              <option value="7">Immigration</option>
              <option value="8">Traffic Rules and Transport</option>
            </select>
            </div>

            <div className="create-right">
              <progress className="progress-bar" value={this.state.progress} max="100" />
              <br />
              <input className="upload" type="file" onChange={this.handleChangeImage.bind(this)} />
              <button onClick={this.handleUpload.bind(this)}>Upload</button>
              <br />
              <img
                src={this.state.url || "http://via.placeholder.com/400x300"}
                alt="Uploaded images"
                height="20"
                width="30"
              />
            </div>
            <div className="btn">
              <button onClick={this.handleSubmitButton}>Create</button>
            </div>
           
          </form>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    createFeed: feed => dispatch(createFeed(feed))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CreateFeed);
