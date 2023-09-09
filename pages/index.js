import { useFetch } from '@/Hooks/useFetch';
import axios from 'axios';
import React, { isValidElement, useEffect, useState } from 'react';

const Home = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const [todo, setTodo] = useState();
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data);
  //       setTodo(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const { isloading, isFetching, isError, data } = useFetch(url);
  useEffect(() => {
    setTodo(data);
  }, [data]);
  console.log(isloading);
  return (
    <div>
      <h2>{isloading && 'Loading...'} </h2>
      <h2>{!isloading && 'data'}</h2>
    </div>
  );
};

export default Home;
