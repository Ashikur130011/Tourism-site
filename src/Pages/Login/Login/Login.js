import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../images/google-logo-9824-32x32.ico'

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
            <div className="container mt-5 py-5">
         <section className="mx-auto">
           <div className="py-3">
             <h3 className="fw-bold py-5">Login With Google</h3>
             <div>
               <button
                 className="border w-25 mx-auto py-2 btn rounded-pill fw-bold position-relative"
                 onClick={redirectGoogle}
               >
                 <img
                   src={Logo}
                   alt=""
                   className="position-absolute top-50 start-0 translate-middle-y pe-4"
                 />
                 Continue with Google
               </button>
             </div>
             <p className="py-4">
               Already have an account?
               <Link to="/register">Login</Link>
             </p>
           </div>
         </section>
       </div>
        </div>
    );
};

export default Login;