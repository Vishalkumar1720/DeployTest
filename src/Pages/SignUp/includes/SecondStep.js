"use client";
import React from "react";
import { useState } from "react";

const SecondStep = (props) => {
  const { data, handleChange } = props;
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillsChange = () => {
    // Update the input field
    handleChange({
      target: {
        name: "allSkills",
        value: selectedSkills,
      },
    });
    console.log("updated skills in handle skills function", selectedSkills);
  };

  const toggleList = () => {
    // Toggle the list open/close
    setIsListOpen(!isListOpen);
  };

  const handleItemClick = (value) => {
    // Add or remove the clicked item from the selected skills
    const updatedSkills = selectedSkills.includes(value)
      ? selectedSkills.filter((skill) => skill !== value)
      : [...selectedSkills, value];

    // Update the input field
    handleChange({
      target: {
        name: "allSkills",
        value: updatedSkills.join(", "),
      },
    });
    setSelectedSkills(updatedSkills);
    // console.log("Update Skills in handlitem function",updatedSkills);
  };

  return (
    <>
      {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="gender"
            value={data.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="dateofbirth"
          >
            Date of birth
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="dateofbirth"
            type="date"
            value={data.dateofbirth}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="registeredAddress"
          >
            Registered Address
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="registeredAddress"
            type="text"
            placeholder="Enter your Registered Address"
            value={data.registeredAddress}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="registeredPincode"
          >
            RegisteredPincode
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="registeredPincode"
            type="number"
            placeholder="Enter your Registered Pincode"
            value={data.registeredPincode}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="maritalStatus"
          >
            Married Status
          </label>
          <select
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="primarySkill"
          >
            PrimarySkill
          </label>
          <select
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="primarySkill"
            placeholder="Select"
            value={data.primarySkill}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="vedic">Vedic</option>
            <option value="nadi">Nadi</option>
            <option value="numerology">Numerology</option>
            <option value="vastu">Vastu</option>
            <option value="prashana">Prashana</option>
            <option value="kp">KP</option>
            <option value="lalKitab">Lal Kitab</option>
            <option value="western">Western</option>
            <option value="tarot">Tarot</option>
            <option value="plamistry">Plamistry</option>
            <option value="horary">Horary</option>
            <option value="faceReading">Face Reading</option>
            <option value="psychic">Psychic</option>
            <option value="lifeCoach">Life Coach</option>
            <option value="cartomancy">Cartomancy</option>
            <option value="loshuGrid">Loshu Grid</option>
            <option value="psychologist">Psychologist</option>
          </select>
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="allSkills"
          >
            All Skills
          </label>
          <div className="relative">
            <div
              onClick={toggleList}
              className="selected-skills-input flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer"
            >
              {selectedSkills.length > 0
                ? selectedSkills.join(", ")
                : "Select Skills"}
            </div>
            {isListOpen && (
              <select
                className="absolute top-10 left-0 z-10 px-2 py-1 border border-gray-300 rounded w-full"
                name="allSkills"
                multiple
                value={selectedSkills}
                onChange={handleSkillsChange}
              >
                <option value="vedic" onClick={() => handleItemClick("vedic")}>
                  Vedic
                </option>
                <option value="nadi" onClick={() => handleItemClick("nadi")}>
                  Nadi
                </option>
                <option
                  value="numerology"
                  onClick={() => handleItemClick("numerology")}
                >
                  Numerology
                </option>
                <option value="vastu" onClick={() => handleItemClick("vastu")}>
                  Vastu
                </option>
                <option
                  value="prashana"
                  onClick={() => handleItemClick("prashana")}
                >
                  Prashana
                </option>
                <option value="kp" onClick={() => handleItemClick("kp")}>
                  KP
                </option>
                <option
                  value="lalKitab"
                  onClick={() => handleItemClick("lalKitab")}
                >
                  Lal Kitab
                </option>
                <option
                  value="western"
                  onClick={() => handleItemClick("western")}
                >
                  Western
                </option>
                <option value="tarot" onClick={() => handleItemClick("tarot")}>
                  Tarot
                </option>
                <option
                  value="plamistry"
                  onClick={() => handleItemClick("plamistry")}
                >
                  Plamistry
                </option>
                <option
                  value="horary"
                  onClick={() => handleItemClick("horary")}
                >
                  Horary
                </option>
                <option
                  value="faceReading"
                  onClick={() => handleItemClick("faceReading")}
                >
                  Face Reading
                </option>
                <option
                  value="psychic"
                  onClick={() => handleItemClick("psychic")}
                >
                  Psychic
                </option>
                <option
                  value="lifeCoach"
                  onClick={() => handleItemClick("lifeCoach")}
                >
                  Life Coach
                </option>
                <option
                  value="cartomancy"
                  onClick={() => handleItemClick("cartomancy")}
                >
                  Cartomancy
                </option>
                <option
                  value="loshuGrid"
                  onClick={() => handleItemClick("loshuGrid")}
                >
                  Loshu Grid
                </option>
                <option
                  value="psychologist"
                  onClick={() => handleItemClick("psychologist")}
                >
                  Psychologist
                </option>
              </select>
            )}
          </div>
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="language"
          >
            Language
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="language"
                value="hindi"
                checked={data.language === "hindi"}
                onChange={handleChange}
              />
              <span className="ml-2">Hindi</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="language"
                value="en"
                checked={data.language === "en"}
                onChange={handleChange}
              />
              <span className="ml-2">English</span>
            </label>
          </div>
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="experience"
          >
            Experience in years
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="experience"
            type="text"
            value={data.experience}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="dailyHoursContribution"
          >
            How many hours you can contribute daily?
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="dailyHoursContribution"
            type="text"
            value={data.dailyHoursContribution}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="platformReference"
          >
            Where did you hear about AstroGanesh
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="platformReference"
            type="text"
            value={data.platformReference}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="workingOnOtherPlatform"
          >
            Are you working on any other online platforms
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="workingOnOtherPlatform"
                value="true"
                checked={data.workingOnOtherPlatform === "true"}
                onChange={handleChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="workingOnOtherPlatform"
                value="false"
                checked={data.workingOnOtherPlatform === "false"}
                onChange={handleChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
       
      </form> */}


<form className="max-w-md mx-auto">

<div className="relative z-0 w-full mb-5 group">
      <input type="text" name="medical_name" id="medical_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="medical_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Medical Store Name</label>
 
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="text" id="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">License Number</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
    </div>

    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
    </div>

    </div>

    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
    </div>

    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="post_code" id="post_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="post_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code</label>
    </div>

    </div>
   

 

 
  {/* <button type="next" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right" style={{ backgroundColor: '#4AF010' }}
  >Next</button> */}
</form>

    </>
  );
};

export default SecondStep;
