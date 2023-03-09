import { BiLoaderAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegForm() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const handelPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !address || !phone)
      return toast.error("Empty fields");

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
      return toast.error("Invalid email");

    if (!phone.match(/^\d{10}$/)) return toast.error("Invalid phone no");

    if (password.length < 5)
      return toast.error("Password must be 5 or more characters");

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/auth/register`,
        { name, email, password, address, phone }
      );
      console.log(response);

      response.data.success &&
        toast.success(response.data.message + "Please login to continue.");
      setLoading(false);

      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(e);

      toast.error(e.response.data.message);
      setLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handelSubmit}>
      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Your Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-5 py-4 md:py-3 block w-full text-lg placeholder-black
          bg-white outline-none"
        />
      </div>

      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-5 py-4 md:py-3 block w-full text-lg placeholder-black
          bg-white outline-none"
        />
      </div>

      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Phone no</p>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-5 py-4 md:py-3 block w-full text-lg placeholder-black
          bg-white outline-none"
        />
      </div>

      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Address</p>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-5 py-4 md:py-3 block w-full text-lg placeholder-black
          bg-white outline-none"
        />
      </div>

      <div className="space-y-2 mb-8">
        <p className="uppercase text-sm font-semibold">Password</p>
        <input
          type={type}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-5 py-4 md:py-3 block w-full text-lg placeholder-black
          bg-white outline-none"
        />
        <div
          onClick={handelPassword}
          className="text-xl absolute bottom-[15px] right-[20px] text-gray-500"
        >
          {type === "password" ? <AiOutlineEye /> : <AiFillEye />}
        </div>
      </div>

      <button
        type="submit"
        className={`py-4 px-8 w-full text-white cursor-pointer md:hover:bg-gray-600
        flex items-center justify-between gap-2 uppercase
        ${
          loading
            ? "pointer-events-none bg-gray-600"
            : "pointer-events-auto bg-gray-700"
        }`}
      >
        <p className="uppercase text-sm font-semibold">
          {loading ? "Creating account ..." : "Continue"}
        </p>

        <div>
          {loading ? (
            <div className="animate-spin text-xl">
              <BiLoaderAlt />{" "}
            </div>
          ) : (
            <div className="text-xl">
              <MdKeyboardArrowRight />
            </div>
          )}
        </div>
      </button>

      <p className="font-thin mt-3 text-base">
        Already have an account ?{" "}
        <span
          onClick={() => navigate("/login")}
          className="font-medium cursor-pointer"
        >
          Login
        </span>
      </p>
    </form>
  );
}

export default RegForm;
