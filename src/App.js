import "./App.css";
import Table from "./component/Table_v1";
import Pagination from "./component/Pagination_v1";

function App() {
  const fieldData = ["프로젝트 명", "설명", "기간"];

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const rowData = arr.map((arrData) => ({
    num: arrData,
    proName: "Project_" + arrData,
    comment: "Project_" + arrData,
    startPeriod: "20230529",
    endPeriod: "20240529",
  }));

  return (
    <div className="App">
      <div className="TablePagination" style={{ margin: "10%" }}>
        {rowData && rowData.length && <Table field={fieldData} row={rowData} />}
        {rowData && rowData.length && <Pagination row={rowData} />}
      </div>
    </div>
  );
}

export default App;
