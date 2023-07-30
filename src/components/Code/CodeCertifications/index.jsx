import React from "react";
import awsCert from "../../../images/awsCourseCompletionCert.jpg";
import flatironCert from "../../../images/flatironcert.jpg";
import "./CodeCertifications.css";

const CodeCertifications = () => {
  return (
    <div>
      <h4>Code Certifications</h4>
      <div>
        <img
          src={awsCert}
          alt={"awsCourseCompletionCertification"}
          className={"certification"}
        />
        <img
          src={flatironCert}
          alt={"flatironCourseCompletionCertification"}
          className={"certification"}
        />
      </div>
    </div>
  );
}

export default CodeCertifications;
