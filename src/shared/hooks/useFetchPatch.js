// import { useEffect, useReducer } from "react";
// import AdminApi from "../../api/AdminApi";
// import { FetchingReducer, initialStateFetch } from "../../reducers";

// export const useFetchPatch = (baseurl, url, data, cancelrReq) => {
//   const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch);

//   useEffect(() => {
//     let cancelRequest = false;
//     if (!data) return;

//     const fetchData = async () => {
//       dispatch({ type: "FETCHING" });
//       AdminApi.patch(baseurl + url, data)
//         .then((res) => {
//           if (cancelRequest && cancelrReq) return;
//           //console.log(res.data);
//           dispatch({
//             type: "FETCHED",
//             payload: res.data.Message,
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
//           if (cancelRequest && cancelrReq) return;
//           if (e.response) {
//             dispatch({
//               type: "MESAGEDETAIL",
//               messageDetail: e.response.data.Message,
//             });
//           }
//           // if (e.response) {
//           //   dispatch({
//           //     type: "MESAGEDETAIL",
//           //     messageDetail: e.response.data.message,
//           //   });
//           // }
//           if (e.response) {
//             //console.log(e.response.status);
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
//         });
//     };

//     fetchData();

//     return function cleanup() {
//       cancelRequest = true;
//     };
//   }, [baseurl, url, data, cancelrReq]);

//   return state;
// };
