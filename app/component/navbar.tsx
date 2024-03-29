import Link from "next/link";
import { UseAuth } from "../context/authContaxt"


const Navbar = () => {
    const { user, login, logout } = UseAuth();
    const handleSignIn = async () => {
        try {
            await login();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="text-white flex items-center">
            <ul className="flex">
                <li>
                    <Link href="/" className="mr-4">Home</Link>
                </li>
                <li>
                    <Link href="/" className="mr-4">Timeline</Link>
                </li>
                <li>
                    <Link href="/" className="mr-4">Message</Link>
                </li>
            </ul>
            <ul className="flex">
                <li onClick={handleSignIn} className="mr-4">Login
                </li>
                <li onClick={handleSignIn} className="mr-4">logout</li>
            </ul>
        </div>
    )
}

export default Navbar;