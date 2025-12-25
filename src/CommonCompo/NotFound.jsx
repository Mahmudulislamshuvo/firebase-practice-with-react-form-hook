import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated Icon Section */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-20">
            <div className="w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
              <AlertCircle className="h-20 w-20 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">Page Not Found</h2>
          <p className="text-slate-600 max-w-75 mx-auto">
            The page you're looking for doesn't exist or has been moved to
            another URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 rounded-xl text-slate-700 font-medium hover:bg-white transition-all active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
