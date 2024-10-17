import { Card, Flex } from "antd";
import { Link } from "react-router-dom";

let dataTitles = [
  "People",
  "Planets",
  "Films",
  "Species",
  "Starships",
  "Vehicles",
];
const Home = () => {
  return (
    <>
      <Flex
        wrap={true}
        gap={15}
        justify="center"
        align="center"
        style={{ marginTop: "20vh" }}
      >
        {dataTitles.map((dataTitle) => {
          return (
            <div
              style={{
                textAlign: "center",
                width: 150,
                height: 70,
                border: "1px solid #FFE300",
                borderRadius: 5,
              }}
            >
              <Link to={`/${dataTitle.toLowerCase()}`}>
                <h2>{dataTitle}</h2>
              </Link>
            </div>
          );
        })}
      </Flex>
    </>
  );
};

export default Home;
