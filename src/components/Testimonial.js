'use client';

import React, { useState } from 'react';

const Testimonial = ({ 
  title = "What Our Members Say",
  subtitle = "Real stories from real people who transformed their lives with us.",
  testimonials = [],
  backgroundColor = "#070713",
  textColor = "white",
  accentColor = "#00D9F5",
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member since 2022",
      image: "/images/testimonial-1.svg",
      rating: 5,
      quote: "247Gym completely transformed my fitness journey. The trainers are incredible and the community is so supportive. I've never felt stronger!",
      location: "New York"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Member since 2021",
      image: "/images/testimonial-2.svg",
      rating: 5,
      quote: "The facilities are top-notch and the 24/7 access fits perfectly with my schedule. I've achieved goals I never thought possible.",
      location: "California"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Member since 2023",
      image: "/images/testimonial-3.svg",
      rating: 5,
      quote: "From day one, the staff made me feel welcome. The variety of classes and equipment keeps my workouts exciting and challenging.",
      location: "Texas"
    }
  ];

  const testimonialsData = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto play functionality
  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextTestimonial, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-[1.25rem] h-[1.25rem] ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section 
      className="w-full py-[3rem] sm:py-[4rem] md:py-[5rem]" 
      style={{ backgroundColor }}
    >
      <div className="responsive-container max-w-6xl mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
        {/* Header */}
        <div className="text-center mb-[3rem] sm:mb-[4rem]">
          <h2 
            className="font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] mb-[1.5rem] leading-tight"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <p 
            className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] leading-relaxed max-w-3xl mx-auto opacity-80"
            style={{ color: textColor }}
          >
            {subtitle}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-[1.5rem] p-[2rem] sm:p-[2.5rem] md:p-[3rem] border border-white/10">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] rounded-full overflow-hidden mb-[1.5rem] border-[0.25rem] border-white/20">
                <img 
                  src={testimonialsData[currentIndex]?.image} 
                  alt={testimonialsData[currentIndex]?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-[0.25rem] mb-[1.5rem]">
                {renderStars(testimonialsData[currentIndex]?.rating || 5)}
              </div>

              {/* Quote */}
              <blockquote 
                className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] leading-relaxed mb-[2rem] font-light italic max-w-3xl"
                style={{ color: textColor }}
              >
                "{testimonialsData[currentIndex]?.quote}"
              </blockquote>

              {/* Name and Role */}
              <div className="text-center">
                <h4 
                  className="font-semibold text-[1.25rem] sm:text-[1.375rem] mb-[0.5rem]"
                  style={{ color: textColor }}
                >
                  {testimonialsData[currentIndex]?.name}
                </h4>
                <p 
                  className="text-[1rem] opacity-70"
                  style={{ color: textColor }}
                >
                  {testimonialsData[currentIndex]?.role}
                  {testimonialsData[currentIndex]?.location && (
                    <span className="mx-[0.5rem]">•</span>
                  )}
                  {testimonialsData[currentIndex]?.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {showNavigation && testimonialsData.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-[-1rem] sm:left-[-2rem] top-1/2 transform -translate-y-1/2 w-[3rem] h-[3rem] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                style={{ color: textColor }}
              >
                <svg className="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-[-1rem] sm:right-[-2rem] top-1/2 transform -translate-y-1/2 w-[3rem] h-[3rem] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                style={{ color: textColor }}
              >
                <svg className="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {testimonialsData.length > 1 && (
          <div className="flex justify-center gap-[0.75rem] mt-[2rem]">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-[0.75rem] h-[0.75rem] rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-[2rem]' 
                    : 'hover:scale-110'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? accentColor : 'rgba(255,255,255,0.3)' 
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
