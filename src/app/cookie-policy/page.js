export const metadata = {
  title: 'Cookie Policy | PrintRocket',
  description: 'Learn how PrintRocket uses cookies and similar technologies to enhance your experience on the AI design and printing platform.',
};

const CookiePolicyPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f2ff] via-white to-[#fff4e6] text-slate-900 py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl border border-[#e9e0ff]">
          <span className="inline-flex rounded-full bg-[#622AD1]/10 px-4 py-2 text-[#622AD1] text-sm font-semibold mb-6">Cookie Policy</span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">How PrintRocket uses cookies.</h1>
          <p className="text-lg text-slate-700 leading-8 mb-8">
            Cookies help us deliver a faster, more personalized experience when you browse the PrintRocket AI studio and order printing services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">What Cookies We Use</h2>
            <p className="text-slate-600 leading-7">
              We use essential cookies for site functionality, analytics cookies to understand usage patterns, and preferences cookies to remember your choices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Why We Use Cookies</h2>
            <ul className="list-disc pl-6 text-slate-600 leading-7 space-y-3">
              <li>To keep you signed in during checkout and order tracking.</li>
              <li>To improve site performance and monitor how the AI Studio is used.</li>
              <li>To remember preferences and deliver a better experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Managing Cookies</h2>
            <p className="text-slate-600 leading-7">
              You can manage or disable cookies through your browser settings. Disabling some cookies may affect the functionality of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-600 leading-7">
              If you have questions about cookies, email <a href="mailto:support@printrocket.in" className="text-[#622AD1] hover:underline">support@printrocket.in</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
