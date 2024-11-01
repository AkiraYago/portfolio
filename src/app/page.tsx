import { data } from "@/data";
import About from "@/sections/About";
import Experience from "@/sections/Experience";

export default function Home() {
  const { experience } = data

  return (
    <div className="">
      <About />
      <Experience experienceData={experience} />
    </div>
  );
}
