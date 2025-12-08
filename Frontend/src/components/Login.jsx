import './Login.css';
import { FaUser, FaUnlock} from "react-icons/fa";

export default function Login() {
  return (
    <div className="bg-[#3F72AF] p-8 rounded-xl shadow-lg max-w-md w-md">
        <form className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
            <div className="justify-center">
                <input className='w-full px-4 py-2 border rounded-lg' type="email" placeholder='E-mail' required/>
                <FaUser/>
            </div>
            <div className="justify-center">
                <input className='w-full px-4 py-2 border rounded-lg' type="password" placeholder='Password' required/>
                <FaUnlock/>
            </div>
            <button type="submit" className="p-6">Login</button>
            <div className="justify-center">
                <p className='justify-center text-center'>Don't have an account? <a href="#">Register</a></p>
            </div>

        </form>


    </div>
);}
