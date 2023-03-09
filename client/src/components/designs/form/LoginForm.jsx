import { BiLoaderAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import { useAuthContext } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoAlert } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";
import { emailValidation, passwordValidation } from "./Validation";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");

  const handelPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const [auth, setAuth] = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setEmailError("Field can't be empty.");
      setPasswordError("Field can't be empty.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/auth/login`,
        { email, password }
      );
      console.log(response.data);

      setAuth({
        ...auth,
        user: response.data.user,
        token: response.data.token,
      });

      localStorage.setItem("auth", JSON.stringify(response.data));
      response.data.success && toast.success(response.data.message);
      setLoading(false);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
      setLoading(false);
    }
  };
  return (
    <form className="w-full" onSubmit={handelSubmit}>
      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Email</p>
        <div>
          <input
            onInput={(e) => emailValidation(e, setEmailError)}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-5 py-4 md:py-3 block w-full text-lg placeholder-black 
            outline-none border font-thin
           ${emailError ? "bg-red-50 border-red-500" : "bg-white"}
           ${!emailError && email && "border-green-600 bg-green-100"}
          `}
          />
          {emailError && (
            <div className="text-xl absolute bottom-[17px] right-[20px] text-red-400">
              <GoAlert />
            </div>
          )}
          {!emailError && email && (
            <div
              className="text-xl rounded-full absolute bottom-[17px] 
            right-[20px] text-green-500"
            >
              <TiTick />
            </div>
          )}
        </div>

        {emailError && (
          <p className="text-red-600 text-sm font-thin">{emailError}</p>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <p className="uppercase text-sm font-semibold">Password</p>
        <div>
          <input
            onInput={(e) => passwordValidation(e, setPasswordError)}
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`px-5 py-4 md:py-3 block w-full text-lg placeholder-black 
            outline-none border font-thin
            ${passwordError ? "bg-red-50 border-red-500" : "bg-white"}
            ${!passwordError && password && "border-green-600 bg-green-100"}
           `}
          />
          <div
            onClick={handelPassword}
            className={`text-xl absolute bottom-[16px] right-[20px]  cursor-pointer
            ${passwordError ? "text-red-500" : "text-gray-500"}
            ${!passwordError && password && "text-green-500"}
            `}
          >
            {type === "password" ? <AiOutlineEye /> : <AiFillEye />}
          </div>
        </div>

        {passwordError && (
          <p className="text-red-600 text-sm font-thin">{passwordError}</p>
        )}
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
          {loading ? "Please wait ..." : "Login"}
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
        Don't have an account ?{" "}
        <span
          onClick={() => navigate("/join")}
          className="font-medium cursor-pointer"
        >
          Create account
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
