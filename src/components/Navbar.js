import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-[#131429] py-2 z-50">
      <div className="responsive-container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="247GYM Logo"
            width={50}
            height={40}
            priority
            className="w-8 h-6 sm:w-10 sm:h-8 md:w-[50px] md:h-[40px]"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#00D9F5] transition-colors duration-300 text-sm font-medium">
            Home
          </Link>
          <Link href="/trainers" className="text-white hover:text-[#00D9F5] transition-colors duration-300 text-sm font-medium">
            Trainers
          </Link>
          <Link href="/membership" className="text-white hover:text-[#00D9F5] transition-colors duration-300 text-sm font-medium">
            Membership
          </Link>
          <Link href="/testimonials" className="text-white hover:text-[#00D9F5] transition-colors duration-300 text-sm font-medium">
            Testimonials
          </Link>

          {/* Join Now Button */}
          <button className="bg-[#00D9F5] text-white px-6 h-[42px] rounded-lg font-semibold hover:bg-[#00C4E0] transition-colors duration-300 ml-8">
            Join now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 