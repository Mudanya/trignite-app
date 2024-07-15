import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <div className="w-full mt-8 mb-6 p-8 text-white bg-[#182444]">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-4 md:mb-0">
        <h4 className="text-2xl font-semibold mb-4">Navigation</h4>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <li><a href="#" className="text-lg text-white hover:underline">Home</a><span className="hidden md:inline"> |</span></li>
          <li><a href="#" className="text-lg text-white hover:underline">Services</a><span className="hidden md:inline"> |</span></li>
          <li><a href="#" className="text-lg text-white hover:underline">Testimonials</a><span className="hidden md:inline"> |</span></li>
          <li><a href="#" className="text-lg text-white hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-2xl font-semibold mb-4">Follow us</h4>
        <ul className="flex space-x-2">
          <li><SocialIcon style={{ height: 35, width: 35}} url="https://twitter.com" target='_blank'/></li>
          <li><SocialIcon style={{ height: 35, width: 35 }} url="https://linkedin.com"/></li>
          <li><SocialIcon style={{ height: 35, width: 35 }} url="https://facebook.com"/></li>
          <li><SocialIcon style={{ height: 35, width: 35 }} url="https://instagram.com"/></li>
        </ul>
      </div>
    </div>
    <hr className="mt-4 mb-4"/>
    <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8">
      <div className="mb-2 md:mb-0">
        <p>© 2024 Trignite. All rights reserved.</p>
      </div>
      <div className="md:ml-auto">
        <ul className="flex space-x-2">
          <li><a href="#" className="text-lg text-white hover:underline">Terms & Conditions |</a></li>
          <li><a href="#" className="text-lg text-white hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  
  
  );
}
