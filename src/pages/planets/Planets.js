import { useState } from "react";
import { Flex, Pagination } from "antd";

// Services
import { PlanetsQuery } from "../../services/queries";

// Components
import PlanetsCard from "../../components/PlanetsCard";
import Loading from "../../components/Loading";
import ErrorMssg from "../../components/ErrorMssg";

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    PlanetsQuery(page);

  const PlanetInstances = data?.map((planet, index) => (
    <PlanetsCard key={index} planet={planet} id={(page - 1) * 10 + index + 1} />
  ));
  return (
    <>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <ErrorMssg />
      ) : (
        <Flex
          wrap={true}
          gap="large"
          justify="center"
          style={{ margin: "30px 0" }}
        >
          {PlanetInstances}
        </Flex>
      )}{" "}
      <Pagination
        style={{
          marginTop: 50,
          marginBottom: 50,
        }}
        align="center"
        total={60}
        current={page}
        onChange={(page) => setPage(page)}
        pageSize={10}
        showSizeChanger={false}
        showQuickJumper={true}
      />
    </>
  );
};

export default Planets;
