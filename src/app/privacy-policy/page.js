export const metadata = {
  title: 'Privacy Policy | PrintRocket',
  description: 'Read about how PrintRocket collects, uses, and protects your personal information while using our AI-powered printing and delivery platform.',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f2ff] via-white to-[#fff4e6] text-slate-900 py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl border border-[#e9e0ff]">
          <span className="inline-flex rounded-full bg-[#622AD1]/10 px-4 py-2 text-[#622AD1] text-sm font-semibold mb-6">Privacy Policy</span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Your privacy matters at PrintRocket.</h1>
          <p className="text-lg text-slate-700 leading-8 mb-8">
            PrintRocket is committed to protecting the personal information of students and small businesses who use our AI-powered design, printing, stationery, and delivery platform.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Information We Collect</h2>
            <p className="text-slate-600 leading-7">
              We collect information you provide when placing orders, requesting quotes, or using our AI design studio. This includes contact details, delivery addresses, order preferences, and prompt content needed to generate editable assets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">How We Use Your Data</h2>
            <ul className="list-disc pl-6 text-slate-600 leading-7 space-y-3">
              <li>To process orders and deliver print materials quickly.</li>
              <li>To personalize AI-created stationery and design templates.</li>
              <li>To communicate order status, promotions, and service updates.</li>
              <li>To improve our platform and maintain security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Cookies and Tracking</h2>
            <p className="text-slate-600 leading-7">
              We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can manage cookies through your browser settings at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Data Security</h2>
            <p className="text-slate-600 leading-7">
              We protect your information with appropriate technical and organizational measures. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-600 leading-7">
              If you have questions about privacy, reach out to us at <a href="mailto:support@printrocket.in" className="text-[#622AD1] hover:underline">support@printrocket.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
