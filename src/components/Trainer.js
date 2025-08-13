'use client';

const trainers = [
  {
    name: 'Mia Williams',
    desc: 'Balance your body and mind.',
    img: '/images/trainer-1.svg',
    socials: [
      { icon: '/images/instagram.svg', url: '#' },
      { icon: '/images/linkedin.svg', url: '#' },
      { icon: '/images/facebook.svg', url: '#' },
    ],
  },
  {
    name: 'Sarah Johnson',
    desc: 
      'Endurance is not just physical, it\'s mental strength.',
    img: '/images/trainer-2.svg',
    socials: [
      { icon: '/images/instagram.svg', url: '#' },
      { icon: '/images/linkedin.svg', url: '#' },
      { icon: '/images/facebook.svg', url: '#' },
    ],
  },
  {
    name: 'Alex Carter',
    desc: 'Stronger every day!',
    img: '/images/trainer-3.svg',
    socials: [
      { icon: '/images/instagram.svg', url: '#' },
      { icon: '/images/linkedin.svg', url: '#' },
      { icon: '/images/facebook.svg', url: '#' },
    ],
  },
  {
    name: 'John Lee',
    desc: 'Achieve faster.',
    img: '/images/trainer-4.svg',
    socials: [
      { icon: '/images/instagram.svg', url: '#' },
      { icon: '/images/linkedin.svg', url: '#' },
      { icon: '/images/facebook.svg', url: '#' },
    ],
  },
];

export default function Trainer() {
  return (
    <section className="w-full bg-[#070713] py-8 sm:py-12 md:py-16">
      <div className="responsive-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Train with the Experts!
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Our certified trainers are here to guide, motivate, and help you achieve your goals with proven methods.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] sm:gap-[2rem] mb-[2rem] sm:mb-[2.5rem]">
          {trainers.map((trainer, idx) => (
            <div key={idx} className="bg-[#23222C] rounded-[0.75rem] flex flex-col items-center p-[1.5rem] h-full min-h-[21.25rem]">
              <div className="w-full h-[12rem] bg-gray-300 rounded-[0.75rem] mb-[1.5rem] flex items-center justify-center">
                {/* Replace with <Image /> if using next/image */}
                <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover rounded-[0.75rem]" />
              </div>
              <div className="w-full text-left">
                <h3 className="text-white font-semibold text-[1.125rem] mb-[0.25rem]">{trainer.name}</h3>
                <p className="text-white/80 text-[0.875rem] mb-[0.75rem]">{trainer.desc}</p>
                <div className="flex gap-[0.75rem] items-center">
                  {trainer.socials.map((s, i) => (
                    <a 
                      key={i} 
                      href={s.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-[0.5rem] bg-white/10 rounded-[0.375rem] hover:bg-[#00D9F5]/20 transition-colors duration-300 flex items-center justify-center group"
                    >
                      <img src={s.icon} alt="social" className="w-[1rem] h-[1rem] brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" style={{filter: 'brightness(0) invert(1)'}} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border border-white text-white px-[2rem] py-[0.75rem] rounded-[0.5rem] text-[1.125rem] font-semibold hover:bg-white hover:text-[#070713] transition-all">
            View All Trainer
          </button>
        </div>
      </div>
    </section>
  );
} 