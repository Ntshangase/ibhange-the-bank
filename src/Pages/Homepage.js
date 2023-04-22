import React, { useEffect } from "react";
import axios from "axios";

function Homepage() {
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/bash-alt/fullstack-takehome-test/main/data.json")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>Homepage</div>;
}

export default Homepage;
