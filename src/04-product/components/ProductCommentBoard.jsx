// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function ProductCommentBoard() {
//   const [userComment, setUserComment] = useState([]);
//   const [errorMessage, setErrorMessage] = useState([]);

//   async function getUserComment() {
//     try {
//       const response = await axios.get(
//         `http://localhost:3004/userComment?sid=${sid}`
//       );
//       const commentData = response.rows;
//       setUserComment(commentData);
//       console.log(commentData);
//     } catch (e) {
//       console.error(e.message);
//       setErrorMessage(e.message);
//     }
//   }
//   useEffect(() => {
//     getUserComment();
//   }, []);

//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// export default ProductCommentBoard;
