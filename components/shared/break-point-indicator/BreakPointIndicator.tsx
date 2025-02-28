const BreakpointIndicator = () => {
  return (
    <div className="fixed top-0 right-0 m-4 px-2 py-1 bg-black text-white text-sm rounded-md z-50">
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline">2xl</span>
    </div>
  );
};

export default BreakpointIndicator;
