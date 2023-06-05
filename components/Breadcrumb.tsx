import Link from "next/link";
import React from "react";

type Props = {
  link: string;
};

const Breadcrumb = ({ link }: Props) => {
  const pathArray = link.split("/").filter((item) => item !== "");
  return (
    <div className="mx-3 text-xs breadcrumbs text-gray-400">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {pathArray.map((v: any, i: number) => {
          const href = `/${pathArray.slice(0, i + 1).join("/")}`;
          return (
            <li key={i}>
              <Link href={href}>{v}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
