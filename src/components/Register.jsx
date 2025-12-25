import { User, Mail, Lock, ArrowRight, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword, registerWithGmail } from "../firebase";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  // const handleFromChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Form submission safety
  //   setSubmitLoading(true);

  //   const { email, password } = formData;
  //   try {
  //     const user = await registerWithEmailAndPassword(email, password);
  //     console.log(user);

  //     setFormData({ name: "", email: "", password: "" });
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitLoading(false);
  //   }
  // };

  // Google Register Handler
  const handleGoogleRegister = async () => {
    try {
      const user = await registerWithGmail();
      console.log("Logged in user:", user);
      if (user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: add react hook form for validation
  const { register, handleSubmit: handleFormSubmit } = useForm();

  const onSubmit = async (data) => {
    setSubmitLoading(true);
    try {
      const user = await registerWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(user);

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Join us and start your journey today
          </p>
        </div>

        {/* Google Login Button */}
        <div className="mt-8">
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-lg shadow-sm bg-white text-slate-700 font-medium hover:bg-slate-50 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500 uppercase tracking-wider text-xs">
              Or register with email
            </span>
          </div>
        </div>

        <form className="mt-4 space-y-4" onSubmit={handleFormSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                name="name"
                type="text"
                required
                // value={formData.name}
                // onChange={handleFromChange}
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                placeholder="Full Name"
                {...register("name", { required: true, maxLength: 80 })}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                name="email"
                type="email"
                required
                // value={formData.email}
                // onChange={handleFromChange}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                  maxLength: 100,
                })}
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                // value={formData.password}
                // onChange={handleFromChange}
                {...register("password", {
                  required: true,
                  maxLength: 80,
                  minLength: 8,
                })}
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-slate-400" />
                ) : (
                  <Eye className="h-5 w-5 text-slate-400" />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            // onClick={handleSubmit}
            disabled={submitLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
              submitLoading
                ? "bg-indigo-400"
                : "bg-indigo-600 hover:bg-indigo-700"
            } transition-all transform active:scale-95 shadow-md`}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <ArrowRight className="h-5 w-5 text-indigo-300" />
            </span>
            {submitLoading ? "Processing..." : "Sign Up"}
          </button>

          <div className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
