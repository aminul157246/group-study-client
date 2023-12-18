import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

 


const FacebookLogin = () => {

    const {signInWithFacebook} = useContext(AuthContext)


    const handleFacebookLogin = () => {
        signInWithFacebook()
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
            <button   onClick={handleFacebookLogin} ><AwesomeButton type="secondary">FB login</AwesomeButton></button>
        </div>
    );
};

export default FacebookLogin;