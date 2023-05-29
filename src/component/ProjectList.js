// Pagination 사용 컴포넌트

import React, { useState, useEffect } from "react";
import Table from "../module/Table_v1";
import Pagination from "../module/Pagination_v1";

const ProjectList = () => {
  const fieldData = ["프로젝트 명", "설명", "기간"];

  const arr = [];
  const arrLength = 23; // 데이터 갯수

  for (let i = 1; i <= arrLength; i++) {
    arr.push(...[i]);
  }

  const rowData = arr.map((arrData) => ({
    num: arrData,
    proName: "Project_" + arrData,
    comment: "Project_" + arrData,
    startPeriod: "20230529",
    endPeriod: "20240529",
  }));

  //////////////////////// pagination ////////////////////////////////
  const [reqRow, setReqRow] = useState([]);

  const limit = 5;
  const maxPage = Math.ceil(rowData.length / limit);

  const [presentPage, setPresentPage] = useState(1); // 현재 페이지
  // 0 ~ 4 ; 5 ~ 9; 10 ~ 14 ; 15
  const startSlice = (presentPage - 1) * limit; // Pagination  공식
  const pageHandler = (data) => {
    setPresentPage(data); // 클릭시 현재 페이지 => data로 바뀜
  };

  useEffect(() => {
    setReqRow(rowData.slice(startSlice, startSlice + limit));

    // eslint-disable-next-line
  }, [presentPage]);

  //////////////////////// pagination ////////////////////////////////

  return (
    <div className="ProjectList">
      <div className="TablePagination" style={{ margin: "10%" }}>
        {rowData && rowData.length && <Table field={fieldData} row={reqRow} />}
        {rowData && rowData.length && (
          <Pagination
            presentPage={presentPage}
            maxPage={maxPage}
            pageHandler={pageHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
