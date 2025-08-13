import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full bg-[#070713] py-8 sm:py-12 md:py-16">
      <div className="responsive-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* About Us Image Column */}
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="w-full h-auto rounded-tr-[9.375rem] rounded-bl-[9.375rem] object-cover"
            />
          </div>
          {/* About Us Content Column */}
          <div className="col-span-1 flex flex-col justify-center items-center lg:items-start">
            {/* Row 1 */}
            <div className="mb-6">
              <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-[2.375rem] leading-tight mb-4">
                More Than a Gym a Lifestyle!
              </h2>
              <p className="text-white font-light text-base sm:text-lg md:text-[1.125rem]">
                We help you build strength, confidence, and a healthier life.
              </p>
            </div>
            
            {/* Row 2 */}
            <div className="mb-8">
              <p className="text-white font-light text-base sm:text-lg md:text-[1.125rem] leading-relaxed">
                Our mission is to create a welcoming space where everyone, regardless of their fitness level, can thrive. Whether you&apos;re a beginner or an experienced athlete, we provide the tools, expertise, and community to support your journey. With state-of-the-art equipment, personalized coaching, and a variety of classes, we help you become the best version of yourself.
              </p>
            </div>
            
            {/* Row 3 - Modern Facilities */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg md:text-[1.125rem] mb-1">
                  Modern Facilities
                </h3>
                <p className="text-white font-light text-sm sm:text-base md:text-[1rem]">
                  Equipped with cutting-edge machines and technology.
                </p>
              </div>
            </div>
            
            {/* Row 3 - Certified Trainers */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg md:text-[1.125rem] mb-1">
                  Certified Trainers
                </h3>
                <p className="text-white font-light text-sm sm:text-base md:text-[1rem]">
                  Experienced professionals dedicated to your progress.
                </p>
              </div>
            </div>
            
            {/* Row 3 - Diverse Classes */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg md:text-[1.125rem] mb-1">
                  Diverse Classes
                </h3>
                <p className="text-white font-light text-sm sm:text-base md:text-[1rem]">
                  From strength training to yoga, there&apos;s something for everyone.
                </p>
              </div>
            </div>
            
            {/* Row 3 - Community Vibes */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/check.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg md:text-[1.125rem] mb-1">
                  Community Vibes
                </h3>
                <p className="text-white font-light text-sm sm:text-base md:text-[1rem]">
                  Join a supportive environment that keeps you motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 