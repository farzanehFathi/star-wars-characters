import { Pagination } from "antd";
import { Flex } from "antd";
import { useState } from "react";

// Services
import { PeopleQuery } from "../services/queries";

// Components
import PeopleCard from "./PeopleCard";
import Loading from "./Loading";
import ErrorMssg from "./ErrorMssg";

const People = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    PeopleQuery(page);

  const PeopleInstances = data?.map((person) => <PeopleCard person={person} />);

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <ErrorMssg mssg={error.message} />
      ) : (
        <Flex
          wrap={true}
          gap="large"
          justify="center"
          style={{ margin: "30px 0" }}
        >
          {PeopleInstances}
        </Flex>
      )}

      <Pagination
        style={{
          marginTop: 50,
          marginBottom: 50,
        }}
        align="center"
        total={9}
        current={page}
        onChange={(page) => setPage(page)}
        pageSize={1}
        showSizeChanger={false}
        showQuickJumper={true}
      />
    </div>
  );
};

export default People;
