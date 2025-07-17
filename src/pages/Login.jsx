import { useState, useContext, use } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, signInWithGoogle, setLoading } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLocalLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLocalLoading(true);

    logIn(formData.email, formData.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
        });
      })
      .finally(() => {
        setLocalLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setLocalLoading(true);
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed!",
          text: error.message,
        });
      })
      .finally(() => {
        setLocalLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 p-4"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-base-100 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-6 text-center">
            <motion.h2
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome Back
            </motion.h2>
            <motion.p
              className="text-teal-100 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Log in to continue
            </motion.p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4 bg-base-100">
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : "focus:border-teal-600 focus:ring-teal-600"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errors.password ? "input-error" : "focus:border-teal-600 focus:ring-teal-600"
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-base-400 hover:text-teal-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-teal-content border-none text-white mt-6"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
              </motion.button>
            </form>

            <div className="divider text-base-content my-6">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full mb-4"
              disabled={loading}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Login with Google
            </button>

            <p className="mt-6 text-center text-sm text-base-content">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-teal-600 hover:text-teal-500 transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 text-center text-base-content text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © {new Date().getFullYear()} ZenTour. All rights reserved.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
