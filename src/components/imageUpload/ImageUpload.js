import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class ImageUpload extends Component {
  state = {
    cameraMake: "",
    cameraModel: "",
    focalLength: "",
    iso: "",
    selectedFile: null
  };
  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  fileUploadHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cameraMake", this.state.cameraMake);
    formData.append("cameraModel", this.state.cameraModel);
    formData.append("focalLength", this.state.focalLength);
    formData.append("iso", this.state.iso);
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    this.props.uploadImage(formData, () => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="cameraMake">Camera Make</label>
          <input
            name="cameraMake"
            type="text"
            id="cameraMake"
            onChange={this.handleChange}
          />
          <label htmlFor="cameraModel">Camera Model</label>
          <input
            name="cameraModel"
            id="cameraModel"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="focalLength">Focal Length</label>
          <input
            name="focalLength"
            id="focalLength"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="iso">ISO</label>
          <input name="iso" id="iso" type="text" onChange={this.handleChange} />
          <label htmlFor="imageToUpload">Image To Upload</label>
          <input
            name="image"
            id="imageToUpload"
            type="file"
            onChange={this.fileSelectedHandler}
          />
          <button onClick={this.fileUploadHandler}>Upload</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ImageUpload);
