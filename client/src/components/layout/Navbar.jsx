import { useState } from "react";
import Avatar from "react-avatar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navlinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
];

function Navbar() {
  const [userMenu, setuserMenu] = useState(false);

  const currentUser = {
    active: false,
    id: "123",
    username: "Sujoykrhaldar",
    isSeller: true,
    profilePic: false,
  };

  return (
    <header className="py-4 fixed w-full h-fit z-50 bg-white ">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-black">
          Justshop
        </Link>

        <nav className="flex items-center justify-between gap-8">
          {navlinks.map((link) => (
            <NavLink
              to={link.url}
              key={link.name}
              className="uppercase font-semibold text-sm text-black"
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className="uppercase font-semibold text-sm text-black"
          >
            Cart
          </NavLink>

          {currentUser.active && (
            <NavLink
              to="/wishlist"
              className="uppercase font-semibold text-sm text-black"
            >
              Wishlist
            </NavLink>
          )}

          {currentUser.active ? (
            <nav>
              <div onClick={() => setuserMenu(!userMenu)}>
                <Avatar color="black" name={currentUser.username} size="40px" />
              </div>
              {userMenu && (
                <div
                  className="absolute h-fit top-[60px] right-0 
            flex flex-col gap-3 justify-center p-6 pr-16 bg-black text-white"
                >
                  <Link
                    to="/dashboard"
                    className="text-sm uppercase text-gray-400 hover:text-white"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/orders"
                    className="text-sm uppercase text-gray-400 hover:text-white"
                  >
                    Orders
                  </Link>
                  <p className="text-sm uppercase text-gray-400 hover:text-white">
                    Logout
                  </p>
                </div>
              )}
            </nav>
          ) : (
            <nav className="flex items-center justify-between gap-8">
              <NavLink
                to="/login"
                className="uppercase font-semibold text-sm text-black"
              >
                Login
              </NavLink>

              <NavLink
                to="/join"
                className="uppercase font-semibold text-sm text-white bg-black px-6 py-3"
              >
                Create account
              </NavLink>
            </nav>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
