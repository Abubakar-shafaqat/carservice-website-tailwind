
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 mt-12 font-serif">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed mb-4">
              At 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨, we provide top-notch car services including maintenance, repairs, and diagnostics to ensure your vehicle is always in perfect condition. We are committed to delivering reliable, efficient, and affordable solutions to keep your car running smoothly for years to come.
            </p>
            <p className="text-sm">Our expert technicians are available to help with all types of car issues, no matter how big or small.</p>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-none space-y-2 text-sm">
              <li><Link href="/services" className="text-yellow-500 hover:underline">Routine Maintenance</Link></li>
              <li><Link href="/services" className="text-yellow-500 hover:underline">Brake Repairs</Link></li>
              <li><Link href="/services" className="text-yellow-500 hover:underline">Engine Diagnostics</Link></li>
              <li><Link href="/services" className="text-yellow-500 hover:underline">Oil Changes</Link></li>
              <li><Link href="/services" className="text-yellow-500 hover:underline">Transmission Repair</Link></li>
              <li><Link href="/services" className="text-yellow-500 hover:underline">Tire Services</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-4">Get in touch with us for all your car service needs! We're here to help you keep your vehicle in the best possible shape.</p>
            <p className="text-sm">Email: <Link href="mailto:bakarabumuhammad78@gmail.com" className="text-yellow-500 hover:underline">bakarabumuhammad78@gmail.com
            </Link></p>
            <p className="text-sm font-serif">Phone: <a href="tel:+923012229525" className="text-yellow-500 hover:underline">+92 3282513267</a></p>
            <p className="text-sm">Visit us: Industrial Area, Korangi, Karachi</p>

            {/* Social Media Links */}
            <div className="mt-4">
              <Link href="https://www.facebook.com/share/R9pR49U3WiL5KMT8/" className="text-yellow-500 mx-2 hover:underline">Facebook</Link>
              <Link href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w" className="text-yellow-500 mx-2 hover:underline">Instagram</Link>
              <Link href="https://www.linkedin.com/in/abu-bakar-0404022b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-yellow-500 mx-2 hover:underline">Linkedin</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-light-cream pt-4 text-center text-sm">
          <p> @𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 © 2024 All Rights Reserved </p>
          <p className='text-right text-xs '>created by ABUBAKAR</p>
          
      </div>
      </div>
    </footer>
  );
};

export default Footer;
