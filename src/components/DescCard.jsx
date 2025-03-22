import React from 'react';

const DescCard = ({ startDate, endDate, jobTitle, companyName, companyLocation, description }) => {
  return (
    <div className="bg-gray-100 p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:w-2/3">
          <h2 className="text-md font-bold text-blue-600">{startDate} – {endDate}</h2>
          <p className="text-gray-800 font-semibold">{jobTitle}</p>
          <p className="text-gray-600">{companyName}</p>
          <p className="text-gray-600">{companyLocation}</p>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          <ul className="list-style-none list-inside text-gray-700">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescCard;
