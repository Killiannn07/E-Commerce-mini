import Cart from "../components/Cart";
import Navbar from "../components/navbar";

export default function CartPage() {
    return(
        <>
            <div className="min-h-screen bg-third justify-center items-center">
                <Navbar />
                <Cart />
            </div>
        </>
    )
    
}