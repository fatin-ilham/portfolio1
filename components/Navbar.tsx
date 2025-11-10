export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 border-b border-gray-800">
      <h1 className="text-xl font-bold text-primary">FATIN</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="mailto:fatin@example.com" className="hover:text-primary">Contact</a>
      </div>
    </nav>
  );
}
