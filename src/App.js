import { useState } from "react";
import GetPeople from "./GetPeople";

import { Pagination } from "antd";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h1>Star Wars</h1>
      <GetPeople num={currentPage} />

      <Pagination
        align="center"
        total={82}
        defaultCurrent={1}
        current={currentPage}
        onChange={(currentPage) => setCurrentPage(currentPage)}
        pageSize={1}
        showSizeChanger={false}
        showQuickJumper={true}
      />
    </div>
  );
}

export default App;
