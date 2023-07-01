// Pagination 사용 컴포넌트

import React from "react";
import Table from "../module/Table_v1";
import { project_field, project_row } from "../constant/TableData";

const ProjectList = () => {
  return (
    <> 
      <Table field={project_field} row={project_row} />
    </>
  );
};

export default ProjectList;
