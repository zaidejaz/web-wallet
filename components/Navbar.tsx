const Navbar = ({...props}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="flex max-w-7xl w-full min-h-20 mx-auto bg-foreground/5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-xl justify-center items-center p-3 m-4">
      <p className="text-2xl font-bold">SolWallet</p>
    </div>
  );
};

export default Navbar;