import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout } from "../api/internal";
import { resetUser } from "../store/userSlice";

const Navbar = () => {
  const [currActive, setCurrActive] = useState("/");
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.user.auth);

  const handleLogout = async () => {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
      await logout();
      dispatch(resetUser());
    }
    return;
  };

  return (
    <nav className={`bg-black py-2 nav-separator`}>
      <ol className={`flex mx-auto justify-between container gap-x-3`}>
        <li className="">
          <Link
            onClick={() => {
              setCurrActive("/");
            }}
            className={`p-3 text-lg text-[#dadfff] block hover:opacity-80  active:opacity-80 outline-white`}
            to="/"
          >
            <span className="overflow-hidden rounded-md outline outline-offset-2 outline-gray-800">
              <span className="px-2 py-1 text-black bg-blue-600 rounded-s-lg">
                COIN
              </span>
              <span className="z-10 text-3xl text-purple-700">|</span>
              <span className="px-1 py-1 text-xl bg-transparen">Base</span>
            </span>
          </Link>
        </li>
        <ul className="flex">
          <li className="">
            <Link
              onClick={() => {}}
              className={`p-3 text-lg ${
                currActive === "/" ? "underline" : ""
              } text-[#dadfff] block hover:underline underline-offset-8 active:opacity-80`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              onClick={() => {
                setCurrActive("/crypto");
              }}
              className={`p-3 text-lg ${
                currActive === "/crypto" ? "underline" : ""
              } text-[#dadfff] block hover:underline underline-offset-8 active:opacity-80`}
              to="/crypto"
            >
              Crypto
            </Link>
          </li>
          <li className="">
            <Link
              onClick={() => {
                setCurrActive("/blogs");
              }}
              className={`p-3 text-lg ${
                currActive === "/blogs" ? "underline" : ""
              } text-[#dadfff] block hover:underline underline-offset-8 active:opacity-80`}
              to="/Blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="">
            <Link
              onClick={() => {
                setCurrActive("/submit");
              }}
              className={`p-3 text-lg ${
                currActive === "/submit" ? "underline" : ""
              } text-[#dadfff] block hover:underline underline-offset-8 active:opacity-80`}
              to="/submit"
            >
              Post blog
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-x-2">
          {isAuthenticated ? (
            <li className="self-center">
              <button
                key={123123}
                onClick={handleLogout}
                className="block px-3 text-lg outline-red-500 rounded-xl h-fit text-[#dadfff] transition-colors ease-out hover:bg-red-500 active:opacity-90"
              >
                logout
              </button>
            </li>
          ) : (
            <>
              <li className="">
                <Link
                  onClick={() => {}}
                  className={`px-3 py-0.5 hover:outline transition-all ease-out outline-offset-2 outline-blue-600 bg-blue-600 rounded-xl text-lg text-[#dfe1ee] block active:opacity-80`}
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li className="">
                <Link
                  onClick={() => {}}
                  className={`p-3 text-lg text-[#dadfff] block hover:opacity-80  active:opacity-80`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </ol>
    </nav>
  );
};

export default Navbar;
