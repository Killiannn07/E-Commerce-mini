import { useNavigate } from "react-router-dom";
import { FaUser, FaUnlock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit =
    isValidEmail(email) && password.trim() !== "" && username.trim() !== "";
  return (
    <div className="bg-third px-6 py-12 rounded-xl shadow-2xl w-sm border border-white ">
      <form className="flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Register
        </h1>
        <div className="relative w-full mb-8">
          <input
            className="w-full h-full pl-4 pr-8 py-4 border border-black rounded-2xl  outline-none text-black"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdEmail className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
        </div>
        <div className="relative w-full mb-8">
          <input
            className="w-full h-full pl-4 pr-8 py-4 border border-black rounded-2xl  outline-none text-black"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
        </div>
        <div className="relative w-full mb-8">
          <input
            className="w-full h-full pl-4 pr-8 py-4 border border-black rounded-2xl  outline-none text-black"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaUnlock className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
        </div>
        <button
          type="submit"
          className="py-3 px-1 bg-secondary w-1/2 m-4 mx-auto block font-bold text-white rounded-2xl cursor-pointer hover:bg-primary hover:scale-105"
          onClick={() => canSubmit && navigate("/")}
        >
          Register
        </button>
        <div className="justify-center">
          <p className="text-center text-black">
            Do you have an account?{" "}
            <a className="text-secondary underline font-bold hover:text-primary cursor-pointer" onClick={() => navigate("/Login")}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
