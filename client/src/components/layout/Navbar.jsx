import { useState } from "react";
import Avatar from "react-avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authProvider";

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

  const [auth, setAuth] = useAuthContext();

  const navigate = useNavigate();

  const handelLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout successful");
    navigate("/login");
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

          {auth.user && (
            <NavLink
              to="/wishlist"
              className="uppercase font-semibold text-sm text-black"
            >
              Wishlist
            </NavLink>
          )}

          {auth.user ? (
            <nav>
              <div
                onClick={() => setuserMenu(!userMenu)}
                className="peer cursor-pointer"
              >
                <Avatar color="black" name={auth.user.name} size="40px" />
              </div>
              {userMenu && (
                <div
                  // className="absolute h-fit top-[25px] right-0
                  // pointer-events-none peer-hover:pointer-events-all hover:pointer-events-all
                  // peer-hover:opacity-100 opacity-0 hover:opacity-100
                  // flex flex-col gap-3 justify-center
                  // p-6 pr-16 bg-gray-800 text-white"

                  className="absolute h-fit top-[68px] right-0 
                flex flex-col gap-3 justify-center 
                p-6 pr-16 bg-black text-white border border-gray-500"
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
                  <p
                    onClick={handelLogout}
                    className="text-sm uppercase text-gray-400 hover:text-white cursor-pointer"
                  >
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
