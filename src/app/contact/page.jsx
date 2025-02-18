export default function Contact() {
  return (
    <main className="my-6 px-4">
      <div className="max-w-5xl mx-auto bg-[#09090b] px-6 sm:px-12 py-8 pb-10 flex flex-col border-2 border-white/20 rounded-xl shadow-lg">
        <div className="m-4 p-2 text-4xl font-bold text-center">
          <h1>
            <span className="border-b-2 border-[#ff0080]">Contact Us</span>
          </h1>
        </div>
        <div className="w-full mt-8 border border-accent rounded-lg">
          <iframe
            className="w-full h-[1600px] rounded-lg"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdr8RdYjyPielNZipZ-vnfBAzBgFK_mw5Ffp35WqVCTv-7yJA/viewform?embedded=true"
            width="900"
            height="1668"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}
