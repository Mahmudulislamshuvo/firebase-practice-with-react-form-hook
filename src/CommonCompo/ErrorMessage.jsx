const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 mt-1 bg-red-100 border border-red-200 rounded-lg animate-error">
      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
      <p className="text-xs font-medium text-red-800">{message}</p>
    </div>
  );
};

export default ErrorMessage;
