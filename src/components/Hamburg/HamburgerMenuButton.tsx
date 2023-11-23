import React from "react";

interface HamburgerMenuButtonProps {
  onClick: () => void;
}

const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({ onClick }) => {
  return (
    <button
      className="md:hidden px-2 py-1 text-gray-600"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenuButton;
