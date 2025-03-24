export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto m-6 p-8 min-h-screen bg-[#101012]/70 backdrop-blur-lg text-[#fafafa] border-2 border-white/20 rounded-lg shadow-lg">
      <div className="w-16 h-16 border-4 border-[#ff0080] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-white dark:text-gray-300">
        Loading...
      </p>
    </div>
  );
}
