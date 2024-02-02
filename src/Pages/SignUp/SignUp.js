"use client";
import { useState } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import "react-toastify/dist/ReactToastify.css";


import FirstStepper from "./includes/FirstStep";
import SecondStepper from "./includes/SecondStep";
import ThirdStepper from "./includes/ThirdStep";

const MainForm = () => {
  const [ setErrors] = useState({});

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "male",
    dateofbirth: "",
    registeredAddress: "",
    registeredPincode: "",
    primarySkill: "",
    allSkills: [],
    language: "",
    experience: "",
    dailyHoursContribution: "",
    platformReference: "",
    workingOnOtherPlatform: "",
    onboardReference: "",
    mainBusiness: "",
    highestQualification: "",
    learnAstrologyFrom: "",
    instaLink: "",
    facebookLink: "",
    linkedInLink: "",
    youtubeLink: "",
    websiteLink: "",
    earningExpectation: "",
    longBio: "",
    maritalStatus: "",
  });

  const handleChange = (event) => {
    const targetData = event.target;
    var name = targetData?.name;
    var value = targetData?.value;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => {
    if (!isLastStep)
      setActiveStep((cur) => {
        console.log("Current value:", cur);
        return cur + 1;
      });
      setCircleColor('#4AF010');
  };
  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
      setCircleColor('#808080'); // Change the circle color to white
    }
  };

  // const handleBlur = () => {
  //   validateForm();
  // };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!email.trim()) newErrors.email = "Email is required";
  //   if (!password.trim()) newErrors.password = "Password is required";
  //   setErrors(newErrors);
  // };
  const [activeTab, setActiveTab] = useState(0);
  const [circleColor, setCircleColor] = useState('#808080');

  const formElements = [
    <FirstStepper data={data} handleChange={handleChange} key="0" />,
    <SecondStepper data={data} handleChange={handleChange} key="1" />,
    <ThirdStepper
      data={data}
      handleChange={handleChange}
      key="2"
      setData={setData}
    />,
  ];

  return (
    <>
<div className="flex items-center justify-center h-screen bg-zinc-300">

<div className="flex flex-col justify-between items-center h-3/4 w-4/6 bg-white relative overflow-hidden shadow-md">
  <div className="flex flex-col items-center mt-8">
    <h1 className="text-3xl font-bold mt--4" style={{color: '#4AF010' }}>Sign Up</h1>
    <p className=" text-zinc-400 mt-2">Welcome ! Manage your Medical Store</p>
    {formElements[activeTab]}
    <div className="flex justify-between w-full">
{/* back button */}
<button
  disabled={activeTab === 0 || isFirstStep}
  onClick={() => {
    setActiveTab((prev) => prev - 1);
    handlePrev();
  }}
  className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${
    activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"
  }`} style={{ backgroundColor: '#4AF010' }}
>
  Back
</button>
{/* next button */}
<button onClick={() => { setActiveTab((prev) => prev + 1); handleNext(); }}
  disabled={activeTab === formElements.length - 1 || isLastStep}
  className={`text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
    activeTab === formElements.length - 1
      ? "opacity-50 bg-slate-600"
      : "opacity-100"
  }` } style={{ backgroundColor: '#4AF010' }}
>
  Next
</button>
</div>
  </div>

  <div className="flex flex-col items-center mb-8">
    <p>Already Have an Account?<span style={{ color: '#4AF010' }}>Sign In</span></p>
  </div>

  <div className="absolute top-0 right-0 h-72 w-72 bg-blue-500 rounded-full flex items-center justify-center clip-half-circle" style={{ marginRight: '-150px', marginTop: '-60px', backgroundColor: '#4AF010', opacity: '.5' }}></div>

  <div className="absolute bottom-48 left-0 h-24 w-24 rounded-full flex items-center justify-center clip-half-circle" style={{ marginLeft: '-28px', marginBottom: '-20px', backgroundColor: '#4AF010', opacity: '.5' }}>
  </div>

  <div className="absolute bottom-0 left-0 h-72 w-72 bg-blue-500 rounded-full flex items-center justify-center clip-half-circle" style={{ marginLeft: '-100px', marginBottom: '-90px', backgroundColor: '#4AF010', opacity: '.5' }}>
  </div>

  <div className="absolute bottom-0  h-4 w-4 rounded-full flex items-center justify-center clip-half-circle" style={{ marginRight: '15px', marginBottom: '7px', backgroundColor: '#4AF010' }}>
  </div>

  <div className="absolute bottom-0  h-4 w-4 rounded-full flex items-center justify-center clip-half-circle" style={{ marginLeft: '35px', marginBottom: '7px', backgroundColor: circleColor, }}>
  </div>

</div>
</div>

{/* <div className="flex flex-wrap gap-x-6 mx-auto">


{activeTab === formElements.length - 1 ? (
  <button
    className="px-4 py-2 rounded-xl bg-blue-600 text-white"
    onClick={() => console.log("Submit")}
  >
    Submit
  </button>
) : null}
</div> */}

</>

  
  );
};

export default MainForm;
