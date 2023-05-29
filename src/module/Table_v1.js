import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Table_v1 = (props) => {
  const [field, setField] = useState([]);
  const [row, setRow] = useState([]);

  useEffect(() => {
    setField(props.field);
    setRow(props.row);
  }, [props]);

  return (
    <div className="Table_v1">
      <Table striped bordered hover>
        <thead>
          <tr>
            {field.map((fieldData, index) => (
              <th key={index}>{fieldData}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {row.map((rowData, idx) => (
            <tr key={idx}>
              <td>{rowData.proName}</td>
              <td>{rowData.comment}</td>
              <td>
                {rowData.startPeriod} ~ {rowData.endPeriod}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Table_v1;
