import { UseAuth } from "../context/authContaxt"


const Navbar = () => {
    const { user } = UseAuth();
    console.log(user);
    return (
        <div>
            <h1>Navbar</h1>
        </div>
    )
}

export default Navbar;