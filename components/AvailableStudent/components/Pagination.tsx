import React, { useState } from "react";

type Props = {};

const Pagination = (props: Props) => {
  const [numPages, setNumPages] = useState(4);
  const [page, setPage] = useState("");

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(e.target.dataset.title || "");
  };

  const generateRadioButtons = () => {
    const radioButtons = [];
    for (let i = 1; i <= numPages; i++) {
      radioButtons.push(
        <input
          type="radio"
          name="options"
          data-title={i.toString()}
          className="btn btn-ghost"
          checked={page === i.toString()}
          onChange={handlePageChange}
          key={i}
        />
      );
    }
    return radioButtons;
  };

  return <div className="btn-group">{generateRadioButtons()}</div>;
};

export default Pagination;
