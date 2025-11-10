import Image from "next/image";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full border-4 border-primary"
        />
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Hey, I’m Fatin 👋
          </h1>
          <p className="text-lg text-gray-300">
            I’m a <span className="text-primary">Computer Science</span> student
            at BRAC University. Passionate about{" "}
            <span className="text-primary">AI, storytelling</span> and creating
            themed web apps like <i>Fallout Pip-Boy CV</i> & <i>Mass Effect
            Simulator</i>.
          </p>
        </div>
      </div>

      <h2 className="text-3xl mt-20 mb-6 font-semibold">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-5 rounded-2xl hover:border-primary border border-gray-700 transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{p.description}</p>
            <a
              href={p.link}
              className="text-primary font-medium hover:underline"
              target="_blank"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
