type Props = {
  title: string;
};

const Navbar = (props: Props) => {
  const { title } = props;

  return (
    <div className="flex items-center justify-center h-14 bg-stone-50 rounded-md shadow-large m-2">
      <h1 className="text-2xl font-semibold text-center">{title}</h1>{" "}
    </div>
  );
};

export default Navbar;
