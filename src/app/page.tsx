import { data } from "@/data";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default function Home() {
  const { experience, projects } = data

  return (
    <div className="">
      <About />
      <Experience experienceData={experience} />
      <Projects projects={projects} />
    </div>
  );
}
