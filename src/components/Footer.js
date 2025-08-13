import Link from 'next/link';

export default function Footer({
  brand = { highlight: '247', rest: 'gym' },
  logoSrc = '/images/logo.svg',
  logoAlt = '247gym logo',
  description = 'Empowering your fitness journey with personalized training, cutting-edge equipment, and a supportive community. Build lasting habits for a healthier, stronger you.',
  linkGroups = [
    {
      title: 'Quick Links',
      columns: [
        [
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/#about' },
          { label: 'Programs', href: '/#programs' },
        ],
        [
          { label: 'Testimonials', href: '/#testimonials' },
          { label: 'Membership', href: '/#membership' },
          { label: 'FAQ', href: '/#faq' },
        ],
        [
          { label: 'Community', href: '/#community' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ],
      ],
    },
  ],
  socials = [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
  ],
  containerClass = 'responsive-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  paddingYClass = 'py-[3.125rem]', // 50px
  bgColor = '#070713',
  textColor = '#FFFFFF',
  mutedTextColor = 'rgba(255,255,255,0.7)',
  accentColor = '#3B5BFF',
  copyright = `© ${new Date().getFullYear()} 247gym. All Rights Reserved.`,
}) {
  const renderIcon = (name) => {
    const common = 'w-[1.5rem] h-[1.5rem]';
    const primaryColor = '#00D9F5'; // Teal primary color
    switch (name) {
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" className={common} fill={primaryColor} aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.521a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" className={common} fill={primaryColor} aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg viewBox="0 0 24 24" className={common} fill={primaryColor} aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer role="contentinfo" aria-label="Footer" className={`${paddingYClass}`} style={{ backgroundColor: bgColor }}>
      <div className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.5rem]">
          {/* Brand and Description */}
          <section aria-labelledby="footer-brand" className="max-w-xl">
            <h2 id="footer-brand" className="sr-only">About {brand?.highlight}{brand?.rest}</h2>
            <div className="mb-[1.25rem]">
              <Link href="/" aria-label={`${brand?.highlight}${brand?.rest} home`} className="inline-flex items-center gap-[0.5rem]">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={logoAlt}
                    className="h-[3rem] sm:h-[3.5rem] md:h-[4rem] w-auto"
                  />
                ) : (
                  <>
                    <span className="text-[1.75rem] font-semibold" style={{ color: accentColor }}>{brand?.highlight}</span>
                    <span className="text-[1.75rem] font-semibold" style={{ color: textColor }}>{brand?.rest}</span>
                  </>
                )}
              </Link>
            </div>
            <p className="text-[1rem] leading-relaxed" style={{ color: mutedTextColor }}>
              {description}
            </p>

            {/* Socials */}
            <nav aria-label="Social media" className="mt-[2rem]">
              <ul className="flex items-center gap-[1.25rem]">
                {socials.map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} aria-label={s.name} className="inline-flex items-center justify-center">
                      {renderIcon(s.icon)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="lg:pl-[2rem]">
            {linkGroups.map((group) => (
              <section key={group.title} aria-labelledby="footer-links-heading">
                <h3 id="footer-links-heading" className="text-[1.125rem] font-semibold mb-[1.25rem]" style={{ color: textColor }}>
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1.5rem]">
                  {group.columns.map((col, idx) => (
                    <ul key={idx} className="space-y-[0.75rem]">
                      {col.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="text-[0.95rem] hover:opacity-100 transition-opacity" style={{ color: mutedTextColor }}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <hr className="mt-[2.5rem] mb-[1.5rem] border-white/10" />

        {/* Copyright */}
        <div className="w-full">
          <p className="text-center text-[0.95rem]" style={{ color: mutedTextColor }}>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
