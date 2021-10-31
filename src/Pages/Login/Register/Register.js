import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
          <div className="container w-50 g_login mt-5 mb-5">
            <section className="mx-auto">
              <div className="py-3">
                <h3 className="fw-bold py-5">Register With Google</h3>
                <div>
                  <button
                    className="border w-25 px-2 bg-success text-white py-2 btn rounded-pill fw-bold"
                    onClick={''}>
                    Continue with Google
                  </button>
                </div>
                <p className="py-4">
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
                </div>
            </section>
          </div>
        </div>
    );
};

export default Register;