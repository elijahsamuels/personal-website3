// import React from "react";
// import Calendar from "@ericz1803/react-google-calendar";
// import useWindowSize from "../hooks/useWindowSize";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const GIGS_CALENDAR_ID = process.env.REACT_APP_GIGS_CALENDAR_ID;

// //replace calendar id with one you want to test
// let calendars = [
// 	// {
//   //   calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com",
//   //   color: "#B241D1",
//   // },
// 	{ calendarId: GIGS_CALENDAR_ID},
// ];

// const GoogleCalendar = () => {
// 	const size = useWindowSize();

// 	let styles = {
// 		calendar: {
// 			borderWidth: "3px", //make outer edge of calendar thicker
// 			borderRadius: "10px",
// 			border: "2px solid #51565d",
// 			backgroundColor: "#F5F5F5",
// 			color: "#51565d",
// 		},
// 		today: { color: "#51565d", border: "2px solid #51565d", borderRadius: "2px" },
// 		day: {
// 			color: "#51565d",
// 			borderRadius: "2px",
// 			fontSize: "15px",
// 			textAlign: "center",
// 		},
// 		// eventText: {
// 		// 	color: "#51565d",
// 		// 	borderRadius: "2px",
// 		// 	fontSize: "15px",
// 		// 	textAlign: "center",
// 		// },
// 		// tooltip: {
// 		// 	transitionDelay: "200ms",
// 		// }
// 	};
	
// if (size.width > 501) {
//   return (
//     <div className="google-calendar">
//       <div
//         style={{
//           width: "90%",
//           paddingTop: "50px",
//           paddingBottom: "50px",
//           margin: "auto",
//           maxWidth: "100%",
// 					minWidth: "500px"
//         }}
//       >
//         <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
//       </div>
//     </div>
//   );

// }

//   // return (
//   //   <div className="google-calendar">
//   //     <div
//   //       style={{
//   //         width: "90%",
//   //         paddingTop: "50px",
//   //         paddingBottom: "50px",
//   //         margin: "auto",
//   //         maxWidth: "100%",
// 	// 				minWidth: "500px"
//   //       }}
//   //     >
//   //       <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
//   //     </div>
//   //   </div>
//   // );
// }

// export default GoogleCalendar;
