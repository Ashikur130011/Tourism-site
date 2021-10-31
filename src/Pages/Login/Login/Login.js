import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const {signInUsingGoogle, setUser,setIsLoading} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const destination = location?.state?.from || '/home';

  const redirectGoogle = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(destination)
        const user = result.user;
          setUser(user)
      })
      .finally(()=> setIsLoading(false))
  }
    return (
        <div>
            <div className="container w-50 g_login mt-5 mb-5">
         <section className="mx-auto">
           <div className="py-3">
             <h3 className="fw-bold py-5">Login With Google</h3>
             <div>
               <button
                 className="border w-25 mx-auto bg-success text-white px-3 btn rounded-pill fw-bold"
                 onClick={redirectGoogle}>
                 Continue with Google
               </button>
             </div>
             <p className="py-4">
               Already have an account?
               <Link to="/register">Register</Link>
             </p>
           </div>
         </section>
       </div>
        </div>
    );
};

export default Login;