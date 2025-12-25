import { useEffect } from "react";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";

import Badge from "./Badge";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./index.css";

document.title = `Elijah Samuels | Resume`;

const awsBadge = {
  id: "82bbd038-e9d4-4d08-bed5-b1b6cd70b0da",
  host: "https://www.credly.com",
  img: "/badges/awsCloudPractitioner.png",
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services Training and Certification",
  url: "https://www.credly.com/badges/82bbd038-e9d4-4d08-bed5-b1b6cd70b0da",
};

const phistStoryDefcon33 = {
  id: "",
  host: "https://forum.defcon.org/node/252999#post252999",
  img: "/badges/phistStoryDefcon33.png",
  title: "Phish Stories - The Wizard (2025)",
  issuer: "DEFCON 33",
  url: "https://forum.defcon.org/node/252999#post252999",
};

const resume = "/ElijahSamuelsSoftwareEngineerResume.pdf";

const Resume = () => {
  useEffect(() => {
    document.title = "Elijah Samuels | Resume";
  }, []);

  return (
    <div className="resume-container">
      <div className="resume">
        <h4 style={{ margin: 0, color: "white" }}>Resume</h4>

        <a
          href={resume}
          download="Elijah_Samuels_Resume.pdf"
          className="mui-style-button"
          onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255,255,255,0.1)")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}>
          <svg className="mui-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
          </svg>
          DOWNLOAD RESUME
        </a>

        <div className="pdf-viewer-wrapper">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={resume} defaultScale={SpecialZoomLevel.PageWidth} />
          </Worker>
        </div>
      </div>

      <div className="badges-container">
        <Badge badge={awsBadge} />
        <Badge badge={phistStoryDefcon33} />
      </div>
    </div>
  );
};

export default Resume;
