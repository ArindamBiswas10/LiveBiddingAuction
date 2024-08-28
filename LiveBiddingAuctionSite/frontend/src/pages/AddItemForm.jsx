import React, { useEffect, useState } from "react";
import "./PagesCss/BuyerRegister.css"; // Import your stylesheet
import logo from "./img/logo.png";
import carousel1 from "./img/carousel1.png";
import carousel2 from "./img/carousel2.png";
import carousel3 from "./img/carousel3.png";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/userAtoms/user";
// import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddItemForm = () => {
  const user = useRecoilValue(userAtom);
  const sellerId = user?._id;
  const [events, setEvents] = useState([]);
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: "Artwork 3",
    seller: sellerId,
    description: "", //by form
    sold: false,
    itemPic: "",
    buyer: null,
    startingPrice: null,
    soldPrice: null,
    category: "",
    eventName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithPic = new FormData();
      formDataWithPic.append("name", formData.name);
      formDataWithPic.append("seller", formData.seller);
      formDataWithPic.append("description", formData.description);
      formDataWithPic.append("sold", formData.sold);
      formDataWithPic.append("itemPic", formData.itemPic); // Append file object to form data
      formDataWithPic.append("buyer", formData.buyer);
      formDataWithPic.append("startingPrice", formData.startingPrice);
      formDataWithPic.append("soldPrice", formData.soldPrice);
      formDataWithPic.append("category", formData.category);
      formDataWithPic.append("eventName", formData.eventName);

      console.log("formDataWithPic:", formDataWithPic);
      const res = await fetch(`http://localhost:3000/seller/item/${sellerId}`, {
        method: "POST",
        body: formDataWithPic,
      });
      toast.success("Item Added Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0], // Store the file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const GetRequest = async () => {
    const response = await fetch("http://localhost:3000/event/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setEvents(data);
    // console.log(data);
    // const curEventData = data.filter(event => event.startTime === 1600);
    // console.log(curEventData);
    // setEventName(curEventData[0].name)
    // console.log(eventName);
  };

  useEffect(() => {
    GetRequest();
  }, []);

  return (
    <main className={"sign-up-mode w-full h-screen bg-gradient-to-b from-stone-950 to-stone-700"}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action={`http://localhost:3000/seller/item/${sellerId}`}
              autoComplete="off"
              className="sign-up-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="actual-form flex flex-col justify-between items-center">
                <div className="heading">
                  <h2>Add Your Item</h2>
                </div>
                <div className="scrollableArea size-96 flex-grow">
                  <p className="font-semibold text-xl mt-6 mb-4">
                    Item-Details:
                  </p>

                  <div className="input-wrap ">
                    <input
                      type="text"
                      className="input-field"
                      onChange={handleChange}
                      name="name"
                      autocomplete="off"
                    />
                    <label className="active">Item Name</label>
                  </div>
                  <label className="active mt-52 ml-0 static">Item Image</label>
                  <div className="input-wrap itimg">
                    <input
                      type="file"
                      className="input-field"
                      onChange={handleChange}
                      name="itemPic"
                      autocomplete="off"
                    />
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-field"
                      onChange={handleChange}
                      name="description"
                      autocomplete="off"
                    />
                    <label className="active">Item Description</label>
                  </div>
                  <div className="input-wrap">
                    <select
                      name="category"
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="art">Art</option>
                      <option value="antiques">Antiques</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="cars">Cars</option>
                      <option value="realEstate">Real Estate</option>
                    </select>
                    <label className="active">Category:</label>
                  </div>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-field"
                      onChange={handleChange}
                      name="startingPrice"
                      autocomplete="off"
                    />
                    <label className="active">Base price</label>
                  </div>

                  <div className="input-wrap mb-0">
                    <select
                      name="eventName"
                      onChange={handleChange}
                      className="input-field"
                    >
                      {events.map((event) => (
                        <option value={event.name} key={event._id}>
                          {event.name}
                        </option>
                      ))}
                    </select>
                    <label className="active">Event Name</label>
                  </div>
                </div>
                {/* <div className="add"> */}
                <input
                  type="submit"
                  value="Submit"
                  className="sign-btn mt-16 mb-0"
                />
                {/* </div> */}
              </div>
            </form>
          </div>

          <div className="carousel bg-[#1A1A1E] ">
            <div className="images-wrapper">
              <img src={carousel1} className="image img-1 show" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Real-time bidding auction platform.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddItemForm;
