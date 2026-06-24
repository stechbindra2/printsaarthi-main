export const metadata = {
  title: 'Terms of Service | PrintRocket',
  description: 'Review the terms governing the use of PrintRocket’s AI design, printing, stationery, and delivery services.',
};

const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f2ff] via-white to-[#fff4e6] text-slate-900 py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl border border-[#e9e0ff]">
          <span className="inline-flex rounded-full bg-[#622AD1]/10 px-4 py-2 text-[#622AD1] text-sm font-semibold mb-6">Terms of Service</span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Use PrintRocket with confidence.</h1>
          <p className="text-lg text-slate-700 leading-8 mb-8">
            These terms explain how you can use PrintRocket’s platform for AI-powered design, printing, stationery creation, and delivery services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Acceptable Use</h2>
            <p className="text-slate-600 leading-7">
              Users may only submit lawful content and prompts. We reserve the right to reject orders or remove content that violates our guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Order Processing</h2>
            <p className="text-slate-600 leading-7">
              PrintRocket processes orders after confirmation and payment. Delivery timelines are estimates and may vary based on location and workload.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Pricing and Payment</h2>
            <p className="text-slate-600 leading-7">
              Prices are displayed during checkout. All payments must be completed before production begins. Additional fees may apply for custom stationery and express delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Intellectual Property</h2>
            <p className="text-slate-600 leading-7">
              You retain ownership of your original content and prompts. PrintRocket retains rights to any platform-generated templates and designs unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-600 leading-7">
              Questions about these terms can be sent to <a href="mailto:PrintRocket@gmail.com" className="text-[#622AD1] hover:underline">PrintRocket@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
