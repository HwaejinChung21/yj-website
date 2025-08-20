import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="text-center pb-20">
      <div className="border-b border-gray-400 mb-50"></div>
      <h1 className="text-5xl font-bold mb-2 text-customBlack">Speak with YJ Advisory</h1>
      <div className="w-1/4 mx-auto mb-4">
        <h1 className="text-xl font-normal text-gray-400">Direct, discreet, and personal. Schedule a private call or message—no forms, no noise.</h1>
      </div>
      <Link href="/inquiry" className="bg-customGold p-3 rounded-3xl hover:bg-customTan transition-all duration-200 text-white font-normal">Contact Us</Link>
      <div className="border-b border-gray-400 mt-53"></div>
    </div>
  );
}