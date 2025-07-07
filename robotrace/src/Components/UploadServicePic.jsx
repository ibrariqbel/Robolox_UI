import React, { useContext, useState } from "react";
import { context } from "../Context/Store";
import "./UploadServicePic.scss";

const UploadServicePic = ({ showUploadForm, setShowUploadForm }) => {
  const { uploadServicePic } = useContext(context);
  const serviceId = sessionStorage.getItem("ServiceId");

  const [image, setImage] = useState(null); // for preview
  const [selectedFile, setSelectedFile] = useState(null); // actual file for backend
  const [loadImage, setLoadImage] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // for preview
      setSelectedFile(file); // actual file for backend
      setLoadImage(true);
    }
  };

  const handleUpload = async () => {
    if (serviceId && selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const upload = await uploadServicePic(formData, serviceId);
      if (upload) {
        setShowUploadForm(false);
      }
    }
  };

  return (
    <div className="upload-service-container">
      <h3 className="upload-title">Upload Service Picture</h3>

      <label htmlFor="uploadProfilePic" className="upload-label">
        Choose Image
      </label>
      <input
        id="uploadProfilePic"
        type="file"
        style={{ display: "none" }}
        onChange={handleImage}
      />

      {image && <img src={image} alt="Preview" className="preview-img" />}

      <button className="upload-btn" disabled={!loadImage} onClick={handleUpload}>
        Save Changes
      </button>
    </div>
  );
};

export default UploadServicePic;
