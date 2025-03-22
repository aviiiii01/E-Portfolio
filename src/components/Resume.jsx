import React from "react";
import logo from "../assets/logo.png";
import DescCard from "./DescCard";
import Footer from "./Footer";

const Resume = () => {
  return (
    <div>
    <div className="bg-[#d4c1ec] h-full pb-10">
      <div className="flex items-center pt-20 pb-5 justify-center">
        <img className="w-8" src={logo} alt="Logo" />
        <p className="text-3xl font-bold">Resume</p>
      </div>
      <div>
        <div className="flex space-x-121 justify-center items-center p-5">
          <div className="text-2xl font-semibold">Experience</div>
          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 :focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Get My Resume!
            </button>
          </div>
        </div>
        <div className="pt-5">
          <DescCard
            startDate="December 2023"
            endDate="August 2024"
            jobTitle="Design and Web Development Intern"
            companyName="MYCTO INNOVATIONS"
            companyLocation="Remote"
            description={[
              "Developed and maintained web applications using React and Node.js.",
              "Enhanced UI/UX design based on user feedback and analytics.",
              "Collaborated with cross-functional teams to optimize web functionality",
              "Contributed to team-building initiatives.",
            ]}
          />
        </div>
        <div className="text-2xl py-10 font-semibold px-78">Education</div>
        <div>
          <DescCard
            startDate="2022"
            endDate="Present"
            jobTitle="Computer Science & Engineering"
            companyName="ABES ENGINEERING COLLEGE"
            companyLocation="Ghaziabad, India"
            description={[
              "CGPA : 8.4 (till sem 5)",
              "Coursework: Data Structures & Algorithms, Web Development, Operating Systems, Database Management Systems, Computer Networks, Computer Architecture, Objected-Oriented Programming, Advanced Mathematics",
            ]}
          />
        </div>
        <div className="pt-5">
          <DescCard
            startDate="2021"
            endDate="2022"
            jobTitle="12th Grade"
            companyName="RALLI INTERNATIONAL SCHOOL"
            companyLocation="Ghaziabad, India"
            description={[
              "CGPA : 9.8 ",
              "Coursework: Science",
              "Board: CBSE",
              "Chemistry Topper",
              "Participated in various Science Competitions",
            ]}
          />
        </div>
        <div className="pt-5">
          <DescCard
            startDate="2019"
            endDate="2020"
            jobTitle="10th Grade"
            companyName="RALLI INTERNATIONAL SCHOOL"
            companyLocation="Ghaziabad, India"
            description={[
              "CGPA : 9.5",
              "Board: CBSE",
              "Participated in various Art Competitions",
              "Played Basketball at School Level",
            ]}
          />
        </div>
        <div className="text-2xl py-10 font-semibold px-78">
          TECHNICAL SKILLS
        </div>
        <div className="pt-2">
          <div className="bg-gray-100 p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto text-gray-800">
            <ul>
              <li>
                <b>PROGRAMMING LANGUAGES:</b>{" "}
                <p className="text-gray-600">Python, C++ | C, Solidity </p>
              </li>
              <li>
                <b>Core Skills:</b>
                <p className="text-gray-600">
                  {" "}
                  Data Structures and Algorithms, Problem Solving, Blockchain{" "}
                </p>
              </li>
              <li>
                <b>Frontend Development: </b>
                <p className="text-gray-600">
                  HTML, CSS, JavaScript, ReactJS, TailwindCSS, NextJS{" "}
                </p>
              </li>
              <li>
                <b>Backend Development: </b>
                <p className="text-gray-600">
                  Django, Clerk Authentication, MongoDB{" "}
                </p>
              </li>
              <li>
                <b>Tools and Platforms: </b>
                <p className="text-gray-600">
                  Figma, Kubernetes, AWS Experience working in Unix/Linux
                  environments.
                </p>
              </li>
              <li> <b>INTERPERSONAL SKILLS</b>
              <p className="text-gray-600">
• Leadership • Conflict Resolution • Active Listening
• Creative Thinking • Collaboration • Teamwork
</p>
</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Resume;
