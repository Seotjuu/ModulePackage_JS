import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const Table_v1 = ({ field, row }) => {
  const [fieldState, setFieldState] = useState([]);
  const [rowState, setRowState] = useState([]);

  useEffect(() => {
    setFieldState(field);
    setRowState(row);
  }, [field, row]);

  ///////////////////////////////////////// 모듈 사용자 수정 //////////////////////////////////////////////////

  const [checked_value, setChecked_value] = useState([]);

  const radio_checked_handler = () => {
    const nodeList = Array.prototype.slice.call(
      document.querySelectorAll("[type=radio]:checked")
    );

    const checkList_reduce = nodeList.reduce((acc, node) => {
      const radio_add_object = {
        name: node.name,
        value: node.value,
      };

      return [...acc, radio_add_object];
    }, []);

    setChecked_value(checkList_reduce);
  };

  useEffect(() => {
    console.log(checked_value);
  }, [checked_value]);

  return (
    <div className="Table_v1">
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

      <button type="button" onClick={radio_checked_handler}>
        button
      </button>
    </div>
  );
};

export default Table_v1;
