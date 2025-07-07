import React, { useContext, useState } from "react";
import "./UserProfile.css";
import IsAuthorized from "../Utils/IsAuthorized";
import { RiArrowGoBackLine } from "react-icons/ri";
import { context } from "../Context/Store";
import { ToastContainer } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import CreateServices from "../ShareComponents/CreateServices";

const UserProfile = () => {
  // IsAuthorized();
  const [image, setImage] = useState(null);
  const [showColor, setShowColor] = useState(true);
  const[showUploadForm, setShowUploadForm] = useState(false)
  const [showForm, setShowForm] = useState(false);
  const { user, uploadProfileImage } = useContext(context);

  const handleUpload = () => {
    if (!image) return alert("Please select an image");
    const formData = new FormData();
    formData.append("image", image);
    uploadProfileImage(formData);
  };

  const toggleColor = (val) => {
    setShowColor(val);
  };

  return (
    <>
      <ToastContainer />
      <div className="profile-container">
        {/* Left Panel */}
        <div className="left-block">
          <div className="ptofile-block">
            <div className="profile-pic">
              <img
                src={user.profilePicUrl || "/default-profile.png"}
                alt={user.username}
                width={200}
              />
              <button type="button" onClick={handleUpload}>
                Upload
              </button>
              <h2>{user.username}</h2>
              <h2>Live Location</h2>
              <h2>Discription</h2>
              <h2>Review and Rating ({user.reviews?.length || 0})</h2>
              <h2>Service Provider ({user.services?.length || 0})</h2>
            </div>
            <input
              type="file"
              placeholder="Upload Your Profile Pic"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="ptofile-block">
            <h3>Description</h3>
          </div>

          <div className="ptofile-block">
            <h3>Skill</h3>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-block">
          <div className="service-header">
            {showForm ? (
              <button
             disabled={showUploadForm}
                onClick={() => {
                  setShowForm(false);
                }}
              >
                <RiArrowGoBackLine style={{ marginRight: "10px" }} />
                Back
              </button>
            ) : (
              <span
                onClick={() => {
                  setShowForm(true);
                }}
              >
                <FaPlus style={{ marginRight: "10px" }} />
                Create New
              </span>
            )}
          </div>
          <hr />

          {!showForm && (
            <div className="header">
              <span
                onClick={() => toggleColor(true)}
                className={showColor ? "span" : ""}
              >
                Active Service
              </span>
              <span
                onClick={() => toggleColor(false)}
                className={!showColor ? "span" : ""}
              >
                Inactive Service
              </span>
            </div>
          )}

          {showForm ? (
            <CreateServices setShowForm={setShowForm} showUploadForm={showUploadForm} setShowUploadForm={setShowUploadForm} />
          ) : (
            <div className="services">
              {user.services &&
                user.services.map((element) => (
                  <div className="service">
                    <h3>{element.serviceTitle}</h3>
                    <img
                      src={element.picUrls}
                      alt={element.serviceTitle}
                      width={300}
                    />
                    <p>Service Cost: {element.serviceCost} Rs</p>
                    <p>Discount: {element.discount} %</p>
                    <p>#{element.category}</p>
                    <p>Region: {element.region}</p>
                    <p>Time of Completion: {element.timeOfComplete}</p>
                    <button>Book Now</button>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Optional abuse section */}
        <div className="upper-block">
          <h3>Report Abuse</h3>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
