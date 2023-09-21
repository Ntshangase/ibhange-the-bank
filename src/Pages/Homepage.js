import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountData from "../Components/AccountData";

function Homepage() {
  const [zulu, setzulu] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bash-alt/fullstack-takehome-test/main/data.json"
      )
      .then((response) => {
        // console.log(response.data); 
        setzulu(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>Homepage</div>
      {zulu && <AccountData  zulu={zulu} />}
    </div>
  );
}

export default Homepage;
