import Image from 'next/image';
import Features from './Features';

export default function Hero() {
  return (
    <section className="w-full bg-[#070713] flex items-start pt-10 relative overflow-hidden">
      {/* Content Container */}
      <div className="responsive-container relative z-10 mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap max-w-6xl mx-auto h-full min-h-[400px]">
          {/* Hero Texts Column */}
          <div className="hero-texts max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col justify-center h-full" style={{minHeight: '400px'}}>
            <div>
              <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-4 md:mb-6">
                Achieve Your Best Shape Start Today!
              </h1>
              <p className="text-white font-light text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Join a community of fitness enthusiasts, get expert coaching, and achieve real results with personalized training and cutting-edge equipment.
              </p>
              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#00D9F5] text-white font-semibold text-lg md:text-xl lg:text-2xl px-6 md:px-8 py-3 md:py-4 rounded-[10px] hover:bg-[#00C4E0] transition-colors duration-300">
                  Get Started
                </button>
                <button className="border-[1.5px] border-white text-white font-semibold text-lg md:text-xl lg:text-2xl px-6 md:px-8 py-3 md:py-4 rounded-[10px] hover:bg-white hover:text-[#070713] transition-colors duration-300">
                  Claim Free trial
                </button>
              </div>
              {/* Plans Row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                <div className="plan1 bg-[#010005] rounded-[10px] p-[1.25rem] flex-1">
                  <h3 className="text-white font-medium text-[1.125rem] mb-2">Personal Plan</h3>
                  <p className="text-white">
                    <span className="font-semibold text-[2.375rem]">$29</span>
                    <span className="font-light text-[0.875rem]"> per month</span>
                    <a href="#" className="text-white font-medium text-[0.75rem] underline ml-2">view more</a>
                  </p>
                </div>
                <div className="plan2 bg-[#010005] rounded-[10px] p-[1.25rem] flex-1">
                  <h3 className="text-white font-medium text-[1.125rem] mb-2">Group Plan</h3>
                  <p className="text-white">
                    <span className="font-semibold text-[2.375rem]">$49</span>
                    <span className="font-light text-[0.875rem]"> per month</span>
                    <a href="#" className="text-white font-medium text-[0.75rem] underline ml-2">view more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image Column */}
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={600}
              height={600}
              className="w-full h-auto max-w-none object-contain"
            />
          </div>
        </div>
        {/* Features Section - New Row */}
        <div>
          <Features />
        </div>
      </div>
    </section>
  );
} 