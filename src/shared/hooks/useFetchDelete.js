// import { useEffect, useReducer } from "react";
// import AdminApi from "../../api/AdminApi";
// import {
//   FetchingReducer,
//   initialStateFetch,
// } from "../../reducers";

// export const useFetchDelete = (baseurl, url, datadelete, trigger) => {
//   const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch);

//   useEffect(() => {
//     let cancelRequest = false;
//     if (!datadelete) return;
//     const fetchData = async () => {
//       dispatch({ type: "FETCHING" });
//       //console.log(datadelete);
//       AdminApi.delete(baseurl + url, {
//         data: datadelete,
//       })
//         .then((res) => {
//           if (cancelRequest) return;
//           dispatch({
//             type: "FETCHED",
//             payload: res.data.data,
//             code: res.data.Status,
//           });
//           if (res.data.data.message) {
//             dispatch({
//               type: "MESAGEDETAIL",
//               messageDetail: res.data.data.message,
//             });
//           }
//         })

//         .catch((e) => {
//           if (cancelRequest) return;
//           if (e.response) {
//             dispatch({
//               type: "MESAGEDETAIL",
//               messageDetail: e.response.data.Message,
//             });
//           }
//           // if (e.response.data.message) {
//           //   dispatch({
//           //     type: "MESAGEDETAIL",
//           //     messageDetail: e.response.data.message,
//           //   });
//           // }
//           if (e.response) {
//             // //console.log(e.response.status);
//             dispatch({
//               type: "FETCH_ERROR",
//               payload: e.message,
//               code: e.response.status,
//             });
//           } else {
//             dispatch({
//               type: "FETCH_ERROR",
//               payload: e.message,
//               code: e.message,
//             });
//           }
//           // //console.log("jalanerro");
//         });
//     };

//     fetchData();

//     return function cleanup() {
//       cancelRequest = true;
//     };
//   }, [baseurl, url, datadelete, trigger]);

//   return state;
// };
