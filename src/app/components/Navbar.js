import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row items-center justify-between py-6 text-white bg-customBlack px-6">
        <Link href="/" className="text-2xl font-bold">YJ Advisory</Link>
        <ul className="flex flex-row items-center space-x-10 font-medium">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/insights">Insights</Link>
          </li>
          <li>
            <Link href="/inquiry" className="bg-customGold px-4 py-2 rounded-3xl hover:bg-customTan transition-all duration-200">Inquiry</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}