import { Pagination } from "antd";
import { Flex } from "antd";
import { useState } from "react";

// Services
import { PeopleQuery } from "../../services/queries";

// Components
import PeopleCard from "../../components/PeopleCard";
import Loading from "../../components/Loading";
import ErrorMssg from "../../components/ErrorMssg";

const People = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    PeopleQuery(page);

  return (
    <>
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
          {data?.map((person, index) => (
            <PeopleCard
              key={index}
              person={person}
              id={(page - 1) * 10 + index + 1}
            />
          ))}
        </Flex>
      )}

      <Pagination
        style={{
          marginTop: 50,
          marginBottom: 50,
        }}
        align="center"
        total={82}
        current={page}
        onChange={(page) => setPage(page)}
        pageSize={10}
        showSizeChanger={false}
        showQuickJumper={true}
      />
    </>
  );
};

export default People;
