import { useEffect, useReducer } from "react";
import AdminApi from "../../api/AdminApi";
import {
  FetchingReducer,
  initialStateFetch,
} from "../../reducers/FetchingReducer";
export const useFetchPost = (baseurl, url, data, trigger) => {
  const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch);
  // console.log(data)
  useEffect(() => {
    let cancelRequest = false;
    if (!data) return;
    const urlall = baseurl + url;
    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      AdminApi.post(urlall, data)
        .then((res) => {
          if (cancelRequest) return;
          dispatch({
            type: "FETCHED",
            payload: res.data.data,
            code: res.status,
            totalPage: res.data.totalPage,
            totalData: res.data.totalData,
          });
          if (res.data.data.message) {
            dispatch({
              type: "MESAGEDETAIL",
              messageDetail: res.data.data.message,
            });
          }
        })
        .catch((e) => {
          if (cancelRequest) return;
          if (e.response) {
            dispatch({
              type: "MESAGEDETAIL",
              messageDetail: e.response.data.Message,
            });
          }
          // if (e.response.data.message) {
          //   dispatch({
          //     type: "MESAGEDETAIL",
          //     messageDetail: e.response.data.message,
          //   });
          // }
          if (e.response) {
            // console.log(e.response.status);
            dispatch({
              type: "FETCH_ERROR",
              payload: e.message,
              code: e.response.status,
            });
          } else {
            dispatch({
              type: "FETCH_ERROR",
              payload: e.message,
              code: e.message,
            });
          }
        });
    };
    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [baseurl, url, data, trigger]);

  return state;
};
