import { useEffect } from "react";
import Badge from "./Badge";
import "./index.css";

document.title = `Elijah Samuels | Resume`;

const awsBadge = {
  id: "82bbd038-e9d4-4d08-bed5-b1b6cd70b0da",
  host: "https://www.credly.com",
  img: "../../../public/badges/awsCloudPractitioner.png",
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services Training and Certification",
  url: "https://www.credly.com/badges/82bbd038-e9d4-4d08-bed5-b1b6cd70b0da",
};

const Resume = () => {
  useEffect(() => {
    document.title = "Elijah Samuels | Resume";
  }, []);

  return (
    <div className="resume-container">
      <div className="resume">
        <h4>Resume</h4>
        Add PDF resume here.
        <br />
        <br />
        <br />
      </div>
      <div className="badges-container">
        {/* <AwsBadge /> */}
        <Badge badge={awsBadge} />
      </div>
    </div>
  );
};

export default Resume;
