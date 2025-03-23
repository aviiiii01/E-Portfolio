import React from "react";
import logo from "../assets/logo.png";
import DescCard from "./DescCard";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
      <div>
        <div className="bg-[#d4c1ec] h-full pb-10">
          <div className="flex items-center pt-20 pb-5 justify-center">
            <img className="w-8" src={logo} alt="Logo" />
            <p className="text-3xl font-bold">Projects</p>
          </div>
          <div>
            <div className="pt-5">
              <DescCard
                startDate="December 2022"
                endDate="January 2023"
                jobTitle="PARKING MANAGEMENT APP"
                companyName="Tech Stack : OpenCV, WebApp - Html, CSS | Android App - Flutter, Dart"
                description={[
                  "Made a Functional Android App on Android Studio for smart and effective street parking.",
                  "Was among the Top 30 teams in our college out of 130 Teams.",
                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="May 2024"
                endDate="May 2024"
                jobTitle="LOAN CALCULATOR"
                companyName="HTML, CSS, JavaScript"
                companyLocation={
                  <a
                    href="https://github.com/aaanishaaa/loancal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Designed a JavaScript loan calculator with an interactive graph for visualizing loan payments, interest, and principal over time.",
                  "Showcasing proficiency in frontend development.",
                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="May 2024"
                endDate="May 2024"
                jobTitle="TO-DO APP USING DJANGO "
                companyName="Tech Stack: Python-Django, Html, Css"
                companyLocation={
                  <a
                    href="https://github.com/aaanishaaa/to_do_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Built a user-friendly, multi-user To-Do app with Django, featuring task creation, updates, and deletion, enhancing task management efficiency by 40%.",

                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="December 2024"
                endDate="January 2025"
                jobTitle="VALUE WISE"
                companyName="Tech Stack: Jupyter, Flask, Hugging Face API, Html, Css, Javascript"
                companyLocation={
                  <a
                    href="https://github.com/aaanishaaa/to_do_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Developed a data-driven application that assists realtors in determining property prices based on location-specific trends and market data, achieving an pricing accuracy of 98.7%.",

                ]}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
