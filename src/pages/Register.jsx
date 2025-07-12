import { useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { createUser, signInWithGoogle, setUser, updateUserProfile } =
    use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email address";

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Must include uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Must include lowercase letter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the form errors before submitting.",
      });
      return;
    }

    setLoading(true);

    createUser(formData.email, formData.password)
      .then((result) => {
        return updateUserProfile(formData.name, formData.photoURL).then(() => {
          setUser({
            ...result.user,
            displayName: formData.name,
            photoURL: formData.photoURL,
          });
          Swal.fire({
            icon: "success",
            title: "Account Created",
            text: "Your account has been successfully created!",
          }).then(() => {
            navigate("/");
          });
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          title: "Signed in with Google",
          text: `Welcome, ${result.user.displayName}!`,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-6 text-center">
            <motion.h2
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              Create Your Account
            </motion.h2>
            <motion.p
              className="text-teal-100 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              Join our ZenTour community today
            </motion.p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input input-bordered w-full ${
                    errors.name
                      ? "input-error"
                      : "focus:border-teal-600 focus:ring-teal-600"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input input-bordered w-full ${
                    errors.email
                      ? "input-error"
                      : "focus:border-teal-600 focus:ring-teal-600"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo URL{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  className="input input-bordered w-full focus:border-teal-600 focus:ring-teal-600"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errors.password
                        ? "input-error"
                        : "focus:border-teal-600 focus:ring-teal-600"
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-teal-600"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Must contain uppercase, lowercase, and at least 6 characters
                </p>
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-teal-700 border-none text-white mt-6"
                disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </form>

            <div className="divider text-gray-400 my-6">OR</div>

            {/* Google Sign In button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full mb-4 flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-teal-600 hover:text-teal-500 transition-colors">
                Log in here
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}>
          © {new Date().getFullYear()} ZenTour. All rights reserved.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;
