import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lmao Chat</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNzaPelHgrEejyS5LIOs4q6YRmPNZr8O4zA&usqp=CAU"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
