export default function TermsOfService() {
  return (
    <main className="my-6 mb-10">
      <div className="max-w-5xl mx-auto bg-[#09090b] px-12 py-8 pb-10 flex flex-col items-center justify-center border-2 border-white/20 rounded-xl shadow-lg">
        <div className="text-[#fafafa] text-center">
          <h1 className="text-4xl font-bold border-b-2 border-[#ff0080] pb-2">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-md mt-2">Last Updated: 16-02-2025</p>
        </div>

        <div className="w-full mt-6 text-gray-200 text-sm">
          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing AI Text & Speech Translator, you agree to these Terms
              of Service. If you do not agree, you should stop using our
              services immediately.
            </p>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              2. User Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                You must provide accurate and truthful information when
                registering.
              </li>
              <li>
                You are responsible for keeping your account credentials secure.
              </li>
              <li>You must comply with all applicable laws and regulations.</li>
            </ul>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              3. Prohibited Activities
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>No illegal, fraudulent, or harmful use of the service.</li>
              <li>No attempts to disrupt or hack the platform.</li>
              <li>
                No unauthorized data scraping or copying of service content.
              </li>
            </ul>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              4. Service Availability & Limitations
            </h2>
            <p>
              While we strive to maintain uptime, we do not guarantee
              uninterrupted service. We reserve the right to modify, suspend, or
              discontinue services at any time.
            </p>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any direct, indirect, incidental, or
              consequential damages that may occur due to service use.
            </p>
          </section>

          <section className="mb-8 text-base">
            <h2 className="text-xl font-semibold mb-2">
              6. Termination of Service
            </h2>
            <p>
              We reserve the right to terminate or suspend your access if you
              violate these terms or engage in unauthorized activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. If you continue to use our
              service, it means you accept the revised Terms.
            </p>
            <p className="mt-2">
              For any questions, contact us at{" "}
              <strong>support@example.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
