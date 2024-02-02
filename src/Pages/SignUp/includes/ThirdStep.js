import React from "react";
import { useState } from "react";

const ThirdStep = (props) => {
  const { data, handleChange } = props;
  const [referral, setReferral] = useState(false);
  const handleReferralChange = (event) => {
    const value = event.target.value;
    setReferral(value == "yes" ? true : false);
    handleChange(event);
  };

  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Bussiness Source */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="mainBusiness"
          >
            Main source of business(other than astrology)?
          </label>
          <select
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="mainBusiness"
            onChange={(event) => handleChange(event, "mainBusiness")}
            value={data.mainBusiness}
          >
            <option value="select">Select</option>
            <option value="1">Own Business</option>
            <option value="2">Private Job</option>
            <option value="3">Government Job</option>
            <option value="4">Studying in college</option>
            <option value="5">None of the above</option>
          </select>
        </div>
        {/* Qualification */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="highestQualification"
          >
            Select your highest highestQualification
          </label>
          <select
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="highestQualification"
            onChange={handleChange}
            defaultValue={data.highestQualification}
          >
            <option value="select">Select</option>
            <option value="diploma">Diploma</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="graduated">Graduated</option>
            <option value="pg">Post Graduated</option>
            <option value="phd">PHD</option>
            <option value="others">Others</option>
          </select>
        </div>
        {/* From where did you learn astrology? */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="learnAstrologyFrom"
          >
            From where did you learn astrology?
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="learnAstrologyFrom"
            type="text"
            placeholder="From where did you learn astrology"
            defaultValue={data.learnAstrologyFrom}
            onChange={handleChange}
          />
        </div>
        {/* InstaGram */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="instaLink"
          >
            Instagram Profile Link
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="instaLink"
            type="text"
            placeholder="Instagram Profile Link"
            onChange={handleChange}
            defaultValue={data.instaLink}
          />
        </div>
        {/* facebook */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="facebookLink"
          >
            Facebook Profile Link
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="facebookLink"
            type="text"
            placeholder="Facebook Profile Link"
            onChange={handleChange}
            defaultValue={data.facebookLink}
          />
        </div>
        {/* Linkedin */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="linkedInLink"
          >
            Linkedin Profile Link
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="linkedInLink"
            type="text"
            onChange={handleChange}
            placeholder="Linkedin Profile Link"
            defaultValue={data.linkedInLink}
          />
        </div>
        {/* Youtube */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="youtubeLink"
          >
            Youtube Channel Link
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="youtubeLink"
            type="text"
            onChange={handleChange}
            placeholder="Youtube Channel Link"
            defaultValue={data.youtubeLink}
          />
        </div>
        {/* Website */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="websiteLink"
          >
            Website Link
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="websiteLink"
            type="text"
            onChange={handleChange}
            placeholder="Website Link"
            defaultValue={data.websiteLink}
          />
        </div>
        {/* Did anybody refer you to Astroganesh */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="onboardReference"
          >
            Did anybody refer you to Astroganesh
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="onboardReference"
                value="yes"
                onChange={handleReferralChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 focus:ring-indigo-500"
                name="onboardReference"
                value="no"
                onChange={handleReferralChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {referral && (
          <div className="my-5">
            <label
              className="block text-sm font-normal leading-6 text-gray-900"
              htmlFor="onboardReference"
            >
              Referral Code
            </label>
            <input
              className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="onboardReference"
              type="text"
              placeholder="Enter Referral Code"
              value={data.onboardReference}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Earning */}
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="earningExpectation"
          >
            Minimum earning expectation from Astroganesh
          </label>
          <input
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="earningExpectation"
            type="text"
            placeholder="0"
            defaultValue={data.earningExpectation}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-normal leading-6 text-gray-900"
            htmlFor="longBio"
          >
            Long Bio
          </label>
          <textarea
            className="placeholder:font-extralight placeholder:px-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="longBio"
            type="text"
            placeholder="Your Bio...."
            onChange={handleChange}
            defaultValue={data.longBio}
            rows={5}
          />
        </div>
      </form>
    </>
  );
};

export default ThirdStep;
