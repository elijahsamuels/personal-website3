import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiApplemusic } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdSchool } from "react-icons/md";

// const theHangDescription =
//   "This was created for musicians worldwide to connect with one another and help facilitate finding other musicians for various projects. A collection of musicians throughout the world. The ultimate rollidex! As a musician, you're able to sign in with your Google account. Once signed in, you can continue to complete your profile. This will help other musicians find you based on your location, instruments and type of gigs you want to play.";

// const watirDescription = "W.A.T.I.R. (Web Application To Irrigation Records)";

// const cosmoDescription =
//   "C.O.S.M.O. (Client Oriented Service Management Operations)";

const flatironHighlightsArray = [
  "Sinatra",
  "Ruby",
  "Ruby on Rails",
  "Javascript",
  "React",
  "Redux",
  "SQL",
  "PostgreSQL",
  "Github",
  "HTML",
  "CSS",
  "Bootstrap",
  "Semantic-UI",
  "Material-U",
];

const ucdHighlightsArray = [
  "Woodwind Instructor",
  "Music Appreciation",
  "History and Literature of Music",
  "Ear Training/Sight Singing 1, 2 & 3",
];

const kentHighlightsArray = [
  "Coached students to award winning performances/recordings",
  "Directed middle school ensemble",
];

const duHighlightsArray = [
  "Directed, recruited & arranged for the University Jazz Ensemble",
  "Taught private saxophone lessons to non-majors",
  "Maintained jazz studies music library",
  "Teaching assistant",
];

const imlHighlightsArray = [
  "Generated over $1.5M in gross revenue (2019) through coordinating over 300 events",
  "Organized 1000+ musicians throughout CO, NM, ID, WY, NE, KS, MO, TX, UT, AR, KY states",
];

const sfsuHighlightsArray = ["Graduated cum laude", "Teaching assistant"];

const listReturn = (skillsArray) => {
  return skillsArray.map((skill) => <li key={skill}>{skill}</li>);
};

const contentStyle = {
  background: "rgb(5, 0, 70)",
  color: "#fff",
};
const contentArrowStyle = { borderRight: "7px solid  rgb(5, 0, 70)" };
const iconStyle = {
  background: "linear-gradient(to top, rgb(5, 20, 90), rgb(255,255,255))",
  color: "#fff",
};

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline animate={true} layout={"1-column-left"}>
        <VerticalTimelineElement
          id="flatiron-school"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date="2020 - 2021"
          dateClassName={"timeline-date"}
          icon={<FaLaptopCode size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">Flatiron School</h4>
          <h6 className="vertical-timeline-element-subtitle">
            Full Stack Developer Certifcation (525 hours)
          </h6>
          <p>
            Developed projects while learning:
            {listReturn(flatironHighlightsArray)}
          </p>

          <p>
            {/* <Tooltip title={theHangDescription} placement="right-start">
              <Link
                style={{ color: "#FFF" }}
                href="https://github.com/elijahsamuels/thehang-frontend/"
              >
                <SiGithub color="#FFFFFF" size="1em" /> theHang - Musician
                networking tool
              </Link>
            </Tooltip> */}
          </p>

          <p>
            {/* <Tooltip
              title={watirDescription}
              placement="right-start"
              style={{ textDecoration: "none" }}
            >
              <Link
                style={{ color: "#FFF" }}
                href="https://github.com/elijahsamuels/watir-frontend/"
              >
                <SiGithub color="#FFFFFF" size="1em" /> W.A.T.I.R. - Irrigation
                app for plants
              </Link>
            </Tooltip> */}
          </p>

          <p>
            {/* <Tooltip title={cosmoDescription} placement="right-start">
              <Link
                style={{ color: "#FFF" }}
                href="https://github.com/elijahsamuels/cosmo/"
              >
                <SiGithub color="#FFFFFF" size="1em" /> C.O.S.M.O. - Client
                relational management
              </Link>
            </Tooltip> */}
          </p>
        </VerticalTimelineElement>

        {/*---- IML ----*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date="2014 - present"
          dateClassName={"timeline-date"}
          icon={<SiApplemusic size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">
            International Artists League
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Producer & Musician
          </h6>
          <p>{listReturn(imlHighlightsArray)}</p>
        </VerticalTimelineElement>

        {/*---- University of Colorado Denver ----*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date="2014 - 2018"
          dateClassName={"timeline-date"}
          icon={<SiApplemusic size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">
            University of Colorado Denver
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Adjunct Faculty
          </h6>
          <p>{listReturn(ucdHighlightsArray)}</p>
        </VerticalTimelineElement>

        {/*---- Kent Denver School ----*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date="2013 - 2018"
          dateClassName={"timeline-date"}
          icon={<SiApplemusic size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">
            Kent Denver School
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Ensemble Director & Instrumental Coach
          </h6>
          <p>{listReturn(kentHighlightsArray)}</p>
        </VerticalTimelineElement>

        {/*---- University of Denver ----*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date="2011 - 2013"
          dateClassName={"timeline-date"}
          icon={<MdSchool size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">
            University of Denver
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Master of Music
          </h6>
          <p>{listReturn(duHighlightsArray)}</p>
        </VerticalTimelineElement>

        {/*---- San Francisco State University ----*/}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          date={"2004 - 2007"}
          dateClassName={"timeline-date"}
          icon={<MdSchool size="2em" />}
          iconClassName={"icon-class"}>
          <h4 className="vertical-timeline-element-title">
            San Francisco State University
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Bachelor of Music in Music Education
          </h6>
          <p>{listReturn(sfsuHighlightsArray)}</p>
        </VerticalTimelineElement>

        {/*---- Last circle ----*/}
        <VerticalTimelineElement
          iconStyle={{
            background:
              "linear-gradient(to top, rgb(16, 204, 82), rgb(255,255,255))",
            color: "#fff",
          }}
          icon={<RiCheckboxBlankCircleLine size="2em" />}
          iconClassName={"icon-class"}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
