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
                startDate="Feb 2025"
                endDate="Feb 2025"
                jobTitle="DocuMind"
                companyName="Tech Stack : Python, Streamlit, Langchain, GeminiAPI, PyPDF, HuggingFaceBgeEmbeddings,
ConversationBufferMemory"
                companyLocation={
                  <a
                    href="https://github.com/aviiiii01/Docu_Mind-chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Built an AI chatbot that transformed 100+ pages of PDF documents into a searchable Q&A knowledge base; improved information retrieval time by 70% using GeminiAPI and LangChain memory components",
                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="March 2025"
                endDate="March 2025"
                jobTitle="MailGenie"
                companyName="Python, Streamlit, Langchain, SMTP, SSL(Secure Socket Layers)"
                companyLocation={
                  <a
                    href="https://github.com/aviiiii01/MailGenie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Developed an AI email assistant that generated and sent personalized emails for 50+ users; reduced email writing time by over 80% using prompt templates and LangChain..",
                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="Nov 2024"
                endDate="Dec 2024"
                jobTitle="Medical Report Analyzer "
                companyName="Tech Stack: Python, Djnago, HTML, CSS, JavaScript"
                companyLocation={
                  <a
                    href="https://github.com/aviiiii01/Medical-Report-Anlasyzer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "Engineered a comparative analysis feature within the Medical Report Analyzer that provided insights on medical test results, leading to an increase in diagnostic accuracy for users by 30% over a three-month period",
                ]}
              />
            </div>
            <div className="pt-5">
              <DescCard
                startDate="Dec 2024"
                endDate="Jan 2025"
                jobTitle="Farm-Mitra"
                companyName="Tech Stack: Python, Djnago, HTML, CSS, JavaScript"
                companyLocation={
                  <a
                    href="https://github.com/aviiiii01/Farm-Mitra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                }
                description={[
                  "a platform that eliminates middlemen by connecting farmers directly with buyers. This ensuresfair pricing, increases farmers’ profits, and provides consumers with fresh produce at competitive rates.",

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
