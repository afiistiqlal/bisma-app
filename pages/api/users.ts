type Props = {
    user: any;
  };

export default async function getServerSideProps() {
    const data = await fetch("http://localhost:3000/api/hello");
    const user = await data.json();
    return {props: {user}};
  }