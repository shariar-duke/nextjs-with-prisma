import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-2 flex justify-between">
      <h1 className="text-3xl">Pins</h1>
      <nav className="underline">
        <Link href="https://github.com/Learn-with-sumit">Github</Link>
      </nav>
    </header>
  );
}
