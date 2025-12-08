import { useNavigate } from "react-router-dom";
import { FaUser, FaUnlock } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canSubmit = email.trim() !== "" && password.trim() !== "";
  return (
    <div className="bg-transparent px-6 py-12 rounded-xl shadow-2xl w-sm border border-white backdrop-blur-lg">
      <form className="flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Login
        </h1>
        <div className="relative w-full mb-8">
          <input
            className="w-full h-full pl-4 pr-8 py-4 border border-white rounded-2xl  outline-none text-white"
            type="text"
            placeholder="E-mail or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
        </div>
        <div className="relative w-full mb-8">
          <input
            className="w-full h-full pl-4 pr-8 py-4 border border-white rounded-2xl  outline-none text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaUnlock className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
        </div>
        <button
          type="submit"
          className="py-3 px-1 bg-white w-1/2 m-4 mx-auto block font-bold rounded-2xl cursor-pointer" 
          onClick={() => canSubmit && navigate("/")}
          
        >
          Login
        </button>
        <div className="justify-center">
          <p className="text-center text-white">
            Don't have an account?{" "}
            <a className="text-white underline font-bold" href="#">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
