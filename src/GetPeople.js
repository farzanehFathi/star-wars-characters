import { useEffect, useState } from "react";
// import { Button } from "antd";
import axios from "axios";

const GetPeople = ({ num }) => {
  const [peopleData, setPeopleData] = useState();
  //   const [num, setNum] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${num}/`)
      .then((res) => setPeopleData(res.data))
      .catch((err) => console.log(err));
  }, [num]);

  return (
    <div>
      {peopleData ? (
        <div>
          <div>{`Name: ${peopleData.name}`}</div>
          <div>{`Birth year: ${peopleData.birth_year}`}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* <Button onClick={() => setNum(num + 1)}>Next Character</Button> */}
    </div>
  );
};

export default GetPeople;
