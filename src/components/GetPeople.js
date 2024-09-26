import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Flex, Pagination, Row, Col } from "antd";
import ColorPalette from "../styles/ColorPalette";

const GetPeople = () => {
  const [peopleData, setPeopleData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const labelSpan = 10;
  const valueSpan = 12;

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${currentPage}/`)
      .then((res) => setPeopleData(res.data))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <div>
      <Flex justify="center">
        <Card
          style={{
            height: 300,
            width: 240,
            marginBottom: 50,
            marginTop: 50,
            background: `${ColorPalette.cardBackground}`,
            color: `${ColorPalette.cardText}`,
          }}
          justify="center"
          align="center"
          cover={
            <div
              style={{
                height: 60,
                background: `${ColorPalette.backgroundSecondary}`,
                color: `${ColorPalette.textSecondary}`,
                alignContent: "center",
              }}
            >
              <h2 style={{ margin: 0 }}>{`${peopleData.name}`} </h2>
            </div>
          }
        >
          {peopleData ? (
            <Row>
              <Col
                span={labelSpan}
                style={{ textAlign: "left", fontWeight: "bold" }}
              >
                <div>height:</div>
                <div>Mass:</div>
                <div>Hair Color:</div>
                <div>Skin Color:</div>
                <div>Eye Color:</div>
                <div>Birth Year:</div>
                <div>Gender:</div>
              </Col>
              <Col span={valueSpan} style={{ textAlign: "left" }}>
                <div>{`${peopleData.height}`}</div>
                <div>{`${peopleData.mass}`}</div>
                <div>{`${peopleData.hair_color}`}</div>
                <div>{`${peopleData.skin_color}`}</div>
                <div>{`${peopleData.eye_color}`}</div>
                <div>{`${peopleData.birth_year}`}</div>
                <div>{`${peopleData.gender}`}</div>
              </Col>
            </Row>
          ) : (
            <p>Loading...</p>
          )}
        </Card>
      </Flex>

      <Pagination
        style={{
          color: `${ColorPalette.textPrimary}`,
          marginTop: 50,
          marginBottom: 50,
        }}
        align="center"
        total={82}
        current={currentPage}
        onChange={(currentPage) => setCurrentPage(currentPage)}
        pageSize={1}
        showSizeChanger={false}
        showQuickJumper={true}
        itemActiveBg={`${ColorPalette.backgroundSecondary}`}
        itemBg={`${ColorPalette.CardBackground}`}
      />
    </div>
  );
};

export default GetPeople;
