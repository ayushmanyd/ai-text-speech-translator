export default function About() {
  return (
    <main className="my-6">
      <div className="max-w-5xl mx-auto bg-[#09090b] px-4 pb-8 flex flex-col border-2 border-white/20 rounded-xl shadow-lg">
        <div className="text-[#fafafa]">
          <div className="m-4 p-2 text-4xl font-bold">
            <h1 className="text-center">
              <span className="border-b-2 border-[#ff0080]">About Us</span>
            </h1>
          </div>

          <div className="text-lg m-2 p-2 px-4">
            <h2 className="text-center">
              <span className="font-bold text-2xl border-b border-[#ff0080]">
                Our Mission
              </span>
            </h2>
            <p className="mt-4 leading-relaxed">
              Our mission is to empower people around the globe by eliminating
              language barriers through cutting-edge AI translation technology.
              In today's interconnected world, effective communication is
              essential for personal and professional growth. Our platform
              offers real-time text and speech translation, making it easier for
              individuals, businesses, and travelers to communicate effortlessly
              across different languages.
            </p>
            <p className="mt-4 leading-relaxed">
              We strive to enhance cross-cultural communication by providing
              fast, reliable, and accurate translations. Whether you are closing
              business deals, collaborating with international teams, or simply
              connecting with new friends, our platform ensures that language
              differences never stand in your way.
            </p>
          </div>

          <div className="text-lg m-2 p-2 px-4">
            <h2 className="text-center">
              <span className="font-bold text-2xl border-b border-[#ff0080]">
                Why Choose Us?
              </span>
            </h2>
            <p className="mt-4 leading-relaxed">
              Our AI-powered translator offers a seamless experience with
              advanced features tailored for real-world applications. Here's why
              you should choose us:
            </p>
            <ul className="list-disc list-inside mt-4 leading-relaxed">
              <li>
                <span className="font-bold">High Accuracy:</span> Our AI model
                uses state-of-the-art language processing algorithms to ensure
                precise translations.
              </li>
              <li>
                <span className="font-bold">Real-Time Translation:</span>{" "}
                Experience instant results with minimal latency, ideal for live
                conversations and presentations.
              </li>
              <li>
                <span className="font-bold">Multilingual Support:</span> With
                support for over 50 languages, our platform connects you with a
                global audience.
              </li>
              <li>
                <span className="font-bold">User-Friendly Interface:</span>{" "}
                Intuitive design and smooth navigation ensure a hassle-free user
                experience for both beginners and experts.
              </li>
            </ul>
          </div>

          <div className="text-lg m-2 p-2 px-4">
            <h2 className="text-center">
              <span className="font-bold text-2xl border-b border-[#ff0080]">
                Our Vision
              </span>
            </h2>
            <p className="mt-4 leading-relaxed">
              We envision a future where language barriers are a thing of the
              past. Our platform continuously evolves by integrating the latest
              AI advancements, offering smarter, faster, and more accurate
              translations. Our goal is to make communication universally
              accessible, promoting inclusivity and understanding across
              cultures.
            </p>
            <p className="mt-4 leading-relaxed">
              We are committed to innovation, constantly enhancing our platform
              with new features and expanding language support. With every
              update, we strive to deliver a superior translation experience
              that empowers individuals and businesses to connect with the world
              without limitations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
