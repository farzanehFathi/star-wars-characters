import { Flex, Card, Row, Col, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

const PlanetsCard = ({ planet, id }) => {
  const labelSpan = 10;
  const valueSpan = 14;
  return (
    <Flex justify="center">
      <Card
        style={{
          height: 320,
          width: 320,
        }}
        justify="center"
        align="center"
        title={`${planet.name}`}
        bordered={false}
      >
        <Row>
          <Col
            span={labelSpan}
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            <div>Rotation Period:</div>
            <div>Orbital Period:</div>
            <div>Diameter:</div>
            <div>Climate:</div>
            <div>Gravity:</div>
            <div>Terrain:</div>
            <div>Surfact Water:</div>
            <div>Population:</div>
          </Col>
          <Col span={valueSpan} style={{ textAlign: "left" }}>
            <div>
              <Text ellipsis>{`${planet.rotation_period}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.orbital_period}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.diameter}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.climate}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.gravity}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.terrain}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.surface_water}`}</Text>
            </div>
            <div>
              {" "}
              <Text ellipsis>{`${planet.population}`}</Text>
            </div>
          </Col>
        </Row>
        <Link to={id.toString()}>
          <Button style={{ width: "100%", margin: "5% 0" }}>Details </Button>
        </Link>
      </Card>
    </Flex>
  );
};

export default PlanetsCard;
