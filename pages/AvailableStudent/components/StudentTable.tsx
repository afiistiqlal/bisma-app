import React, { useState } from "react";

type Props = {
  data: any;
  columns: any;
};

const StudentTable = ({ data, columns }: Props) => {
  const [pageNumber, setPageSize] = useState(0);  

  return (
    <div>
    </div>
  );
};

export default StudentTable;
