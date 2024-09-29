import { useQuery } from "@tanstack/react-query";
import { Card, Flex, Pagination, Row, Col } from "antd";

// JS files
import ColorPalette from "../styles/ColorPalette";

// APIs
import getpeople from "../API/peopleAPI";

const GetPeople = () => {
  const { data, status } = useQuery({
    queryKey: ["people"],
    queryFn: getpeople,
  });

  console.log(status);
  const labelSpan = 12;
  const valueSpan = 12;

  return (
    <div>
      {data?.map((person) => (
        <Flex justify="center">
          <Card
            style={{
              height: 270,
              width: 220,
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
                <h2 style={{ margin: 0 }}>{`${person.name}`} </h2>
              </div>
            }
          >
            {person ? (
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
                  <div>{`${person.height}`}</div>
                  <div>{`${person.mass}`}</div>
                  <div>{`${person.hair_color}`}</div>
                  <div>{`${person.skin_color}`}</div>
                  <div>{`${person.eye_color}`}</div>
                  <div>{`${person.birth_year}`}</div>
                  <div>{`${person.gender}`}</div>
                </Col>
              </Row>
            ) : (
              <p>Loading...</p>
            )}
          </Card>
        </Flex>
      ))}
      {/* 

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
      /> */}
    </div>
  );
};

export default GetPeople;
