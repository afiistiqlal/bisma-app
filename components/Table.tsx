import React from "react";

type Props = {
  column: any;
  data: any;
};

const Table = ({ column, data }: Props) => {
  return (
    <div>
      <table>
        <thead>
          {column.map((value: any) => {
            return (
              <tr>
                <th>{value.name}</th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {data.map((value: any) => {
            return (
              <tr>
                <td>{value.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
