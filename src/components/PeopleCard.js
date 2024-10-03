import { Card, Flex, Row, Col, Button } from "antd";

const PeopleCard = ({ person }) => {
  const labelSpan = 12;
  const valueSpan = 12;

  return (
    <Flex justify="center">
      <Card
        style={{
          height: 300,
          width: 240,
        }}
        justify="center"
        align="center"
        title={`${person.name}`}
        bordered={false}
      >
        <Row>
          <Col
            span={labelSpan}
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            <div>Height:</div>
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
        <Button style={{ width: "100%", margin: "5% 0" }}>Details </Button>
      </Card>
    </Flex>
  );
};

export default PeopleCard;
