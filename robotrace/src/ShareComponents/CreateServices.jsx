import React, { useContext, useState } from "react";
import "./CreateService.scss";
import { context } from "../Context/Store";
import { ImForward } from "react-icons/im";
import UploadServicePic from "../Components/UploadServicePic";

const CreateServices = ({ setShowForm,showUploadForm ,setShowUploadForm}) => {
  const { createService } = useContext(context);
  const [formData, setFormData] = useState({
    serviceTitle: "",
    discription:"",
    serviceCost: "",
    discount: "",
    timeOfComplete: "",
    region: "",
    category: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
    { showUploadForm?<UploadServicePic showUploadForm={showUploadForm} setShowUploadForm={setShowUploadForm}/>:
        <div className="create-service">
      <h3> Create new Service</h3>
      <form action="">
        <input
          type="text"
          placeholder="Service Name"
          name="serviceTitle"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Discription"
          name="discription"
          onChange={handleChange}
        />
        <input
          type="Number"
          placeholder="Service Cost"
          name="serviceCost"
          onChange={handleChange}
        />
        <input
          type="Number"
          placeholder="Discount"
          name="discount"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Time of Complete"
          name="timeOfComplete"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Region Of Serices"
          name="region"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Hash Tag"
          name="category"
          onChange={handleChange}
        />
      </form>

      <button
        onClick={async() => {
       const service = await createService(formData);
    
      
       if(service)
          {setFormData({
            serviceTitle: "",
            discription:"",
            serviceCost: "",
            discount: "",
            timeOfComplete: "", 
            region: "",
            category: "",
          });
         // setFormData(false)
          setShowUploadForm(true)
        }
        }}
      >
        <ImForward style={{fontSize :"22px", marginLeft:"10px"}}/>
         Save and Continue
      </button>
      <button
        onClick={() => {
          setShowForm(false);
        }}
      >
        Cancel
      </button>
    </div>}
    </>
    
  );
};

export default CreateServices;
