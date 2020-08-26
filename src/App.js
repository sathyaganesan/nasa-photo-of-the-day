import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from 'Header';



function App() {

  const [nasa, setNasa] = useState({});

  useEffect(() => {
    axios
    // .get(`https://api.nasa.gov/planetary/apod?api_key=satLkes9xflbbIelTcYCzoSDOG8SWLwvo90GIK9R`)
    .get(`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV&date=2020-08-20`)
    .then((res) => {
      setNasa(res.nasa);
      console.log(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
    <div className="App">
      <Header
        titlename = {nasa.title}
        date = {nasa.date}
      />
      {/* <Image 
      
      />
      <footer 
      
      /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
