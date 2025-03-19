import React from "react";

/**
 * BreakpointIndicator component displays the current Tailwind CSS breakpoint
 * in the top-right corner of the viewport.
 *
 * This is a development utility component to help with responsive design,
 * showing which breakpoint is currently active (xs, sm, md, lg, xl, 2xl).
 *
 * @returns A fixed position indicator showing the current breakpoint
 */
const BreakpointIndicator: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 m-4 px-2 py-1 bg-black text-white text-sm rounded-md z-50">
      {/* Each span is visible only at its corresponding breakpoint */}
      <span className="sm:hidden">xs</span> {/* visible below 640px */}
      <span className="hidden sm:inline md:hidden">sm</span> {/* 640px-768px */}
      <span className="hidden md:inline lg:hidden">md</span>{" "}
      {/* 768px-1024px */}
      <span className="hidden lg:inline xl:hidden">lg</span>{" "}
      {/* 1024px-1280px */}
      <span className="hidden xl:inline 2xl:hidden">xl</span>{" "}
      {/* 1280px-1536px */}
      <span className="hidden 2xl:inline">2xl</span> {/* 1536px and above */}
    </div>
  );
};

export default BreakpointIndicator;
