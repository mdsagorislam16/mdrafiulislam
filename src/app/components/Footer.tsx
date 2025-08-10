'use client';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/mohammad.rafiul.islam.738067?rdid=VfVjPSy8fMr8yIyk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AH6igWVu8%2F#',
    icon: <FaFacebookF />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-rafiul-islam-356028345/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/black_yaksha22?igsh=MXVsb2R1bjJlNjB4bw%3D%3D',
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <section id="footer" className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright Text */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Md Rafiul Islam. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-xl">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="border border-white rounded-full p-3 text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
