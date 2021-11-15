import React, { useRef } from "react";
import "./styles.scss";
import profile from "../../assests/images/profile.png";
import edit from "../../assests/icons/edit.png";

const AccountProfile = () => {
  // TO store form data
  const firtName = useRef("Balamurali");
  const lastName = useRef("A");
  const email = useRef("13bala90@gmail.com");
  return (
    <div>
      <div className="profile">
        <div className="profile-avator">
          <div className="profile-image">
            <img src={profile} alt="profile" />
          </div>
          <button className="edit-image-button">
            <img src={edit} alt="edit" />
          </button>
        </div>
      </div>
      <div className="profile-form">
        <div className="form-container">
          <div className="input-group">
            <label className="form-label">First Name</label>
            <div className="form-field">
              <input type="text" ref={firtName} className="form-control" />
            </div>
          </div>
          <div className="input-group">
            <label className="form-label">Last Name</label>
            <div className="form-field">
              <input type="text" ref={lastName} className="form-control" />
            </div>
          </div>
        </div>
        <div className="input-group">
          <label className="form-label">Email</label>
          <div className="form-field">
            <input type="text" ref={email} className="form-control" />
          </div>
        </div>

        <div className="save-button">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
