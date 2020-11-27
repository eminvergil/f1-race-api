import React, { useState, useEffect, useReducer } from "react";

import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, data: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, data: action.payload.data };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };

    default:
      return state;
  }
}

export default function FetchData({ year, type }) {
  const [state, dispatch] = useReducer(reducer, { data: [], loading: true });

  useEffect(() => {
    const fetchData = () => {
      let API_Call = `https://cors-anywhere.herokuapp.com/http://ergast.com/api/f1/${year}/${type}.json`;

      // http://ergast.com/api/f1/2005
      // 5/qualifying
      // current - 2020
      // 5/results
      // /drivers

      const cancelToken = axios.CancelToken.source();

      dispatch({ type: ACTIONS.MAKE_REQUEST });
      axios
        .get(API_Call, {
          cancelToken: cancelToken.token,
          "Access-Control-Allow-Origin": "*",
        })
        .then((res) => {
          dispatch({ type: ACTIONS.GET_DATA, payload: { data: res.data } });
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
        });

      // console.log(data);
      return () => {
        cancelToken.cancel();
      };
    };

    fetchData();
  }, [year, type]);

  return state;
}
