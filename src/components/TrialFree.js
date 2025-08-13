export default function TrialFree() {
  return (
    <section className="w-full bg-[#02020A] py-8 sm:py-12 md:py-[3.125rem]">
      <div className="responsive-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-[2.375rem] leading-tight text-center md:text-left">
              Try Us for Free Your First Step to Fitness!
            </h2>
          </div>
          {/* Right Column */}
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <p className="text-white font-light text-base sm:text-lg md:text-[1.125rem] mb-4 sm:mb-6 leading-relaxed text-center md:text-left">
              Still unsure? Come experience our gym for free. Get access to all our facilities and see why we are the best!
            </p>
            <button className="bg-[#00D9F5] text-white font-semibold text-base sm:text-lg md:text-[1.125rem] px-4 sm:px-6 py-2 sm:py-3 rounded-[0.4375rem] hover:bg-[#00C4E0] transition-colors duration-300 w-fit">
              Claim your free trial today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 