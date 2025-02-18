export default function About() {
  return (
    <main className="my-6">
      <div className="max-w-5xl mx-auto bg-[#09090b] px-4 pb-8 flex flex-col border-2 border-white/20 rounded-xl shadow-lg">
        <div className="text-[#fafafa] text-center">
          <div className="m-4 p-2 text-4xl font-bold">
            <h1>
              <span className="border-b-2 border-[#ff0080]">About</span>
            </h1>
          </div>
          <div className="text-xl m-2 p-2 px-4">
            Project Name:{" "}
            <span className="font-bold text-2xl border-b border-[#ff0080]">
              Distributed AI Systems for Speech-Based IoT Applications
            </span>
          </div>
          <div className="text-xl m-4">
            <ul>
              <li>
                Supervisior:{" "}
                <span className="border-b border-[#ff0080] font-bold">
                  Vanshika (E17592)
                </span>
              </li>
            </ul>
          </div>
          <div className="text-lg m-4 mb-8">
            <ul>
              <li>
                <span className="border-b border-[#ff0080] font-bold">
                  Team Members:
                </span>
              </li>
              <li>
                21BCS4913 -{" "}
                <span className="hover:border-b border-[#ff0080]">
                  Ayushman Pratap Yadav
                </span>
              </li>
              <li>
                21BCS4910 -{" "}
                <span className="hover:border-b border-[#ff0080]">
                  Priyansh Sharma
                </span>
              </li>
              <li>
                21BCS4682 -{" "}
                <span className="hover:border-b border-[#ff0080]">
                  Pratham Batra
                </span>
              </li>
              <li>
                21BCS4694 -{" "}
                <span className="hover:border-b border-[#ff0080]">
                  Nitish Mittal
                </span>
              </li>
              <li>
                21BCS4661 -{" "}
                <span className="hover:border-b border-[#ff0080]">Subham</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:px-4">
          <div>
            <h3 className="text-xl font-bold text-center pb-2">
              <span className="border-b border-[#ff0080]">Objective:</span>
            </h3>
            <p className="px-4 text-justify text-gray-200">
              To develop an intelligent, AI-powered application that provides
              seamless, real-time translation of text and speech across multiple
              languages, enabling effective communication and breaking down
              language barriers in personal, professional, and educational
              domains.
            </p>
          </div>
          <br />
          <div>
            <h3 className="text-xl font-bold text-center pb-2">
              <span className="border-b border-[#ff0080]">Description:</span>
            </h3>
            <p className="px-4 text-justify text-gray-200">
              The Intelligent Multilingual Text and Speech Translator is a
              cutting-edge full-stack application designed to harness the power
              of artificial intelligence for multilingual communication. This
              platform delivers real-time, contextually accurate translations of
              text and speech, allowing users to communicate effortlessly across
              languages. The app features advanced natural language processing
              (NLP) models and speech recognition systems to ensure precision
              and usability in diverse scenarios.
            </p>
          </div>
          <br />
          <div>
            <h3 className="text-xl font-bold text-center pb-2">
              <span className="border-b border-[#ff0080]">Technology:</span>
            </h3>
            <p className="px-4 text-justify text-gray-200">
              Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Google Gemini
              Translate API, Artificial Intelligence, Machine Learning
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
