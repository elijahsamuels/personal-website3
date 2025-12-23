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
    <div className="resume-container" style={{ padding: "20px" }}>
      <div className="resume" style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
        <h4>Resume</h4>
        <div
          className="pdf-viewer-wrapper"
          style={{
            height: "80vh",
            width: "100%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}>
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
