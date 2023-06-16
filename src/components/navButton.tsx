import React from "react";

function NavButton({
  children,
  onClick,
  visible = true,
}: {
  children: React.ReactNode;
  onClick: () => void;
  visible?: boolean;
}) {
  return (
    <button
      className={`w-36 py-4 text-xl bg-gray-500 hover:bg-gray-400 rounded-xl ${
        !visible && "invisible"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default NavButton;
