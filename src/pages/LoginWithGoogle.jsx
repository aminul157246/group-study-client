import logo from '../assets/images/glogo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const LoginWithGoogle = () => {

    const {signInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            toast.success('Sign in with Google done!');
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} ><img className='w-[80px]' src={logo} alt="" /></button>
        </div>
    );
};

export default LoginWithGoogle;