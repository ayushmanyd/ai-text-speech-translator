export default function Report() {
  return (
    <main className="my-6">
      <div className="max-w-5xl mx-auto h-screen bg-[#09090b] px-4 pb-8 flex flex-col border-2 border-white/20 rounded-xl shadow-lg">
        <div className="text-[#fafafa] text-center">
          <div className="m-4 p-2 text-4xl font-bold">
            <h1>
              <span className="border-b-2 border-[#ff0080]">
                Report
              </span>
            </h1>
          </div>
          <div className="text-xl m-2 p-2 px-4">
            Project Name:{" "}
            <span className="font-bold text-2xl border-b border-[#ff0080]">
              Distributed AI Systems for Speech-Based IoT Applications
            </span>
          </div>
        </div>
        <div className="lg:px-2">
          <h3 className="p-2 text-xl font-bold text-center pb-2">
            <span className="border-b border-[#ff0080]">Coming Soon...</span>
          </h3>
          <p className="px-4 text-center text-gray-200">Coming Soon...</p>
        </div>
      </div>
    </main>
  );
}
