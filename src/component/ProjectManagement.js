// Pagination 사용 컴포넌트

import Table from "../module/Table_v1";

const ProjectManagement = () => {
  const fieldData = ["프로젝트 명", "설명", "기간"];

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const rowData = arr.map((arrData) => ({
    num: arrData,
    proName: "Project_" + arrData,
    comment: "Project_" + arrData,
    startPeriod: "20230529",
    endPeriod: "20240529",
  }));

  return (
    <div className="ProjectList">
      <div className="TablePagination" style={{ margin: "10%" }}>
        {rowData && rowData.length && <Table field={fieldData} row={rowData} />}
      </div>
    </div>
  );
};

export default ProjectManagement;
