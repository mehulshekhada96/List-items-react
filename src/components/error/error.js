// // import { useState, useEffect } from "react";
// function ErrorContainer(props) {
//     const { error, errorType } = props
//   const errorFunction = (error, errorType) => {
//     if (error)  {
//       if (errorType === "Success") {
//        return  <div className="error_container error_container--success">
//           <div className="col--1">
//             <div className="error_container__icon">
//               <i className="fas fa-check-circle"></i>
//             </div>
//           </div>
//           <div className="col--2">
//             <div className="error_container__title heading-3">Success</div>
//             <span className="para-1 error" id="cancelLogin">
//               error
//             </span>
//           </div>
//           <div className="col--3">
//             <div className="error_container__icon" id="cross">
//               <i className="fas fa-times"></i>
//             </div>
//           </div>
//         </div>;
//       }
//     }

//     if (errorType === "Failure") {
//      return <div className="error_container">
//         <div className="col--1">
//           <div className="error_container__icon">
//             <i className="fas fa-times-circle"></i>
//           </div>
//         </div>
//         <div className="col--2">
//           <div className="error_container__title heading-3">Failure</div>
//           <span className="para-1 error" id="cancelLogin">
//             error
//           </span>
//         </div>
//         <div className="col--3">
//           <div className="error_container__icon" id="cross">
//             <i className="fas fa-times"></i>
//           </div>
//         </div>
//       </div>;
//     }
//     if (errorType === "Info") {
//       return <div className="error_container error_container--info">
//         <div className="col--1">
//           <div className="error_container__icon">
//             <i className="fas fa-info-circle"></i>
//           </div>
//         </div>
//         <div className="col--2">
//           <div className="error_container__title heading-3">Info</div>
//           <span className="para-1 error" id="cancelLogin">
//             error
//           </span>
//         </div>
//         <div className="col--3">
//           <div className="error_container__icon" id="cross">
//             <i className="fas fa-times"></i>
//           </div>
//         </div>
//       </div>;
//     }
//   };
//   return (
//     <div>
     
//       {errorFunction}
//       this is error container
//     </div>
//   );
// }

// export default ErrorContainer;
