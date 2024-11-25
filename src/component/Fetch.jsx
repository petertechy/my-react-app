import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Navbar";

const Fetch = (props) => {
  // useEffect(callback, dependency)
  //hooks

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const endpoint = "https://jsonplaceholder.typicode.com/users";
  const endpoint2 = "https://api.openweathermap.org/data/2.5/weather?q=abeokuta&appid=f654e1f3c0a494ceb74a160ba05d1d0c";
  const getData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData2 = async () => {
    let response = await axios.get(endpoint2);
    console.log(response.data);
    setdata(response.data);
  };

  // getData2()
  useEffect(() => {
    // console.log("Hello Class")
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <button onClick={() => getData()}>Get Data</button>
      <button onClick={() => getData2()}>Get Data 2</button>

      {/* {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <i>{item.id}</i>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        ))
      )} */}

      {/* {data.map((item, index)=>(
        <div key={index}>
        <i>{item.id}</i>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        </div>
      ))} */}
    </>
  );
};

export default Fetch;
