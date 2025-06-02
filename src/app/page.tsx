import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ConnectWithMe from "@/components/ConnectWithMe";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200 relative">
      <Navbar />
      <main className="portfolio-body relative">
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <ConnectWithMe />
      </main>
    </div>
  );
}
