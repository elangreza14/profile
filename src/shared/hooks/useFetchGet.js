import { useEffect, useReducer } from "react";
import AdminApi from "../../api/AdminApi";
import { FetchingReducer, initialStateFetch } from "../../reducers";
import { toString } from "lodash";

export const useFetchGet = (baseurl, url, trigger, start) => {
  const [state, dispatch] = useReducer(FetchingReducer, initialStateFetch);

  useEffect(() => {
    let cancelRequest = false;
    // console.log("isi start", start, url);
    if (toString(start) === "wait") return;
    // //console.log(baseurl + url)

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      AdminApi.get(baseurl + url)
        .then((res) => {
          if (cancelRequest) return;
          // //console.log(res.data);
          dispatch({
            type: "FETCHED",
            payload: res.data.data,
            code: res.data.Status,
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
          // if (e.response) {
          //   dispatch({
          //     type: "MESAGEDETAIL",
          //     messageDetail: e.response.data.message,
          //   });
          // }
          if (e.response) {
            // //console.log(e.response.status);
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
  }, [baseurl, url, trigger, start]);

  return state;
};
