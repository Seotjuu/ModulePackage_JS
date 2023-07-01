import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Pagination from "../module/Pagination_v1";

const Table_v1 = ({ field, row }) => {
  const [fieldState, setFieldState] = useState(field);
  const [rowState, setRowState] = useState([]);

  ////////////////////////////////////////////////////////////////// Pagination //////////////////////////////////////////////////////////////////

  const pageHandler = (start, end) => {
    setRowState(row.slice(start,end));
  }
  
  ///////////////////////////////////////// 모듈 사용자 수정 //////////////////////////////////////////////////

  const [checkedValue, setCheckedValue] = useState([]); // checked된 Array value

  const radioCheckedHandler = () => {
    const nodeList = Array.prototype.slice.call(
      document.querySelectorAll("[type=radio]:checked")
    );

    const checkList = nodeList.map(({ name, value }) => ({ name, value }))

    setCheckedValue(checkList);
  };

  return (
    <div className="Table_v1">
      <button type="button" onClick={radioCheckedHandler}>
        button
      </button>

      <Table striped bordered hover>
        <thead>
          <tr>
            {fieldState.map((field_data, index) => (
              <th key={index}>{field_data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowState.map((row_data, idx) => (
            <tr key={idx}>
              {/* row에 따라 변경 요망 */}
              <td>{row_data.key}</td>
              <td>{row_data.name}</td>
              <td>{row_data.age}</td>
              <td>{row_data.address}</td>
              <td>{row_data.phone}</td>
              <td>
                {row_data.email_check.map((email, email_index) => {
                  return (
                    <Form.Check
                      className="project_radio"
                      label={email.value}
                      key={email_index}
                      type={email.type}
                      name={email.name}
                      value={email.value}
                      defaultChecked={email.value === "unknown"}
                    />
                  );
                })}
              </td>
              {/* row에 따라 변경 요망 */}
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination data={row} pageHandler={pageHandler}/>
    </div>
  );
};

export default Table_v1;
