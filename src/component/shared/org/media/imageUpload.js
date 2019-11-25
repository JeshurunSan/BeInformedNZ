import React, { Component } from "react";
import Preview from "./preview";

import { storage } from "../../../../config/fbConfig";

import "../../../../css/shared/org/media.css";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
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
    return (
      <div>
        <progress value={this.state.progress} max="100" />
        <br />
        <input type="file" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleUpload.bind(this)}>Upload</button>
        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt="Uploaded images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;

//                J-U-N-K CODES

// import React, { Component } from "react";
// import Preview from "./preview";

// import "../../../../css/shared/org/media.css";

// class ImageUpload extends Component {
//   constructor(state) {
//     super(state);
//     this.state = {
//       picture: "",
//       pictureURL: ""
//     };
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="file"
//           onChange={event => {
//             this.displayPicture(event);
//           }}
//         />
//         <div className="media-picture">
//           <Preview pictureURL={this.state.pictureURL} />
//         </div>
//       </div>
//     );
//   }

//   displayPicture(event) {
//     let reader = new FileReader();
//     let file = event.target.files[0];
//     reader.onloadend = () => {
//       this.setState({
//         picture: file,
//         pictureURL: reader.result
//       });
//     };
//     reader.readAsDataURL(file);
//   }
// }

// export default ImageUpload;
