import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about-us">About Us</Link>
        </div>
      </div>
    </nav>
  );
}
