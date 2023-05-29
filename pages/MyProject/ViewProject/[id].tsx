import React from 'react'
import { useRouter } from "next/router";

type Props = {}

const ViewProject = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>{id}</div>
  )
}

export default ViewProject