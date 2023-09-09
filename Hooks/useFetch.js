import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    isloading: false,
    isFetching: false,
    isError: false,
    data: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => {
          return {
            ...prevState,
            isloading: true,
            isFetching: true,
            data: [],
          };
        });
        const res = await axios.get(url);
        setState((prevState) => {
          return {
            ...prevState,
            isloading: false,
            isFetching: false,
            data: res.data,
          };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, isloading: false, isError: true, error };
        });
      }
    };
    fetchData();
  }, []);
  return state;
};
