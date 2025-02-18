export default function PrivacyPolicy() {
  return (
    <main className="my-6">
      <div className="max-w-5xl mx-auto bg-[#09090b] px-12 py-8 pb-10 flex flex-col items-center justify-center border-2 border-white/20 rounded-xl shadow-lg">
        <div className="text-[#fafafa] text-center">
          <h1 className="text-4xl font-bold border-b-2 border-[#ff0080] pb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-md mt-2">Last Updated: 16-02-2025</p>
        </div>

        <div className="w-full mt-6 text-gray-200 text-sm">
          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to AI Text & Speech Translator. Your privacy is important
              to us. This Privacy Policy explains how we collect, use, and
              protect your information.
            </p>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email, and account
                details.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, and
                device details.
              </li>
              <li>
                <strong>Audio & Text Data:</strong> Inputs processed for
                translation.
              </li>
              <li>
                <strong>Cookies:</strong> Used for analytics and improving user
                experience.
              </li>
            </ul>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and improve our AI-powered services.</li>
              <li>To analyze trends and enhance security.</li>
              <li>To comply with legal requirements.</li>
            </ul>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              4. Data Sharing & Security
            </h2>
            <p>
              We do not sell user data. We only share information with trusted
              third parties (e.g., cloud services, analytics) as needed to
              operate our platform.
            </p>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              You have the right to access, modify, or delete your personal
              data. To make a request, contact us at{" "}
              <strong>support@example.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Updates & Contact</h2>
            <p>
              We may update this Privacy Policy from time to time. If you have
              any questions, please contact us at{" "}
              <strong>support@example.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
