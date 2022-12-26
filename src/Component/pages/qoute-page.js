import React, { useState,useEffect} from "react";
import logo from "../media/logo.png";
import emailjs from "@emailjs/browser";
import { NavLink} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {useFormik} from "formik";
import * as yup from "yup";

function QuotePage() {
  const [result,showResult] = useState(false);

//Formik validation 
const formik = useFormik({
         initialValues:{
          firstName:"",
          email:"",
          phone:"",
          service:""
         },
         validationSchema:yup.object({
           firstName :yup.string()
           .required("Name is required"),
           email:yup.string()
           .email()
           .required("Email is required"),
           phone:yup.string()
           .required("Phone number is required")
            .min( 10 , "Minimum 10 number required")
            .max( 10 , "Only 10 numbers allowed!"),
            service:yup.string()
           .required(" Please Select One ")
         }),
         onSubmit:(e)=>{
         sendEmail(e);
         }
 

})

// function for sending mail

const sendEmail = (e) => {
  
  e.preventDefault(e);


   emailjs
  .sendForm(
    "service_y888m57",
    "template_n5bg3xl",
    e.target,
    "user_YoF9ikIb0QCA02WG6AYbL"
  )
  .then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
e.target.reset();
showResult(true);  
notify();
sucesssfx();
};


  let sucess = new Audio("/sucess.wav")
  const sucesssfx = () => {
    sucess.play()
 
  }




  const notify = () =>{
    let sucessmsgbox = document.getElementById("sucessmsg1");
    sucessmsgbox.style.visibility="visible";

  }

  const cancel = () =>{
    let cancelBtn = document.getElementsByClassName("sucessmsgbtn2");
    let sucessmsgbox = document.getElementById("sucessmsg1");
    sucessmsgbox.style.visibility="hidden";
    
  }

  

  return (
    <div>
      <div className="estimaeBlock">
       
        <div id="sucessmsg1">
          <div  className="sucessmsg2">
            <h3>Mail was send Successful our admin contact you shortly <i class="fas fa-check-circle"></i></h3>
            <NavLink exact to="/" className="sucessmsgbtn1">
            Back home 
            </NavLink>
            <button  onClick={cancel}  className="sucessmsgbtn2">Submit another response </button>
          </div>
        </div>




        {/* Estimates words */}
        <div className="estimaeBlock1">
          <h1>Get an Estimate of Your Project</h1>
          <p>
            If you have an idea, it’s time to roll it into a reality & get the
            estimated
          </p>
          <ul>
            <h4>What’s the Beauty of Our Products?</h4>
            <li>affordable price</li>
            <li>Reduced costs</li>
            <li>Quality services</li>
            <li>Unmatchable solutions all at one place</li>
            <li>You’re our first priority. Everything else can wait</li>
          </ul>
        </div>
       
         {/* Estimate Contact Form  */}
        <div className="estimaeBlock2">
          <section id="form-head">
            <div className="container">
              <div className="title">
                <div className="formlogoDiv">
                  <img className="formLogo" src={logo} />
                  <h3>Dream team</h3>
                </div>

                <p> Fill the Form Below to Fetch Your Details </p>
              </div>
              <form
              onSubmit={ 
                // handleSubmit
             formik.handleSubmit
            // sendEmail
              }
              
                id="myform"
              >
                <div className="group">

                  <div className="inputbox">
                    <label className="block-1">
                      FIRSTNAME<span>*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      id="firstname"
                      className="size-1"
                      placeholder="eg: jhon"
                    
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    <div className="underline"></div>
                    {formik.errors.firstName ? 
                    <div className="formError">{formik.errors.firstName}</div>
                    :null}
                 
                  </div>
                 

                  <div className="inputbox">
                    <label className="block-1">
                      LASTNAME<span hidden>*</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      id="lastname"
                      className="size-1"
                      placeholder="eg: wick"
                    />
                    <div className="underline"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="inputbox">
                    <label className="block-2">
                      EMAIL<span>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="size-2"
                      placeholder="eg: jhonwick@gmail.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <div className="underline"></div>
                    {formik.errors.email ? 
                    <div className="formError">{formik.errors.email}</div>
                    :null}
                  </div>
               
                </div>
                <div className="group">
                  <div className="inputbox">
                    <label className="block-1">
                      PHONE<span>*</span>
                    </label>
                    <input
                      name="phone"
                      type="number" 
                      maxlength="10"
                      id="phone"
                      className="size-2"
                      placeholder="your mobile number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    <div className="underline"></div>
                    {formik.errors.phone ? 
                    <div className="formError">{formik.errors.phone}</div>
                    :null}
                  </div>
                 
                </div>

                <div className="group">
                  <div className="inputbox">
                    <label className="block-1">OUR SERVICES</label>
                    <select  name="service" 
                    
                       value={formik.values.service}
                       onChange={formik.handleChange}
                    className="size-2" 
                    id="services">
                      <option value="">--Select One--</option>
                      <option value="Logo Design">Logo Design</option>
                      <option value="Advertising">Advertising</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Photo Editing">Photo Editing</option>
                      <option value="Poster Design">Poster Design</option>
                      <option value="UI & UX Design">UI & UX Design</option>
                      <option value="Other">None of these</option>
                    </select>
                    <div className="underline"></div>
                    {formik.errors.service ? 
                    <div className="formError">{formik.errors.service}</div>
                    :null}
                  </div>
                </div>

                <div className="group">
                  <div className="inputbox">
                    <label className="block-2">MESSAGE</label>
                    <input
                      name="message"
                      type="text"
                      id="message"
                      className="size-2"
                      placeholder="Write something......"
                    />
                    <div className="underline"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="submit"
                >
                  Send <i class="fas fa-paper-plane"></i>
                </button>
                <ToastContainer />
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default QuotePage;
