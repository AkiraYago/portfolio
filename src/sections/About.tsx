import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-c-dblue to-black p-section-phone md:p-section-tablet lg:p-section-desktop flex justify-center items-center min-h-[82svh]">
      <article className="max-w-maximum grid gap-8">
        <div className="grid gap-2">
          <div>
            <h1 className="text-white font-bold leading-tight text-h1-phone md:text-h1-tablet lg:text-h1-desktop">Yago Ellen</h1>
            <h2 className="text-c-unique font-bold leading-tight text-h2-phone md:text-h2-tablet lg:text-h2-desktop">Front End Developer</h2>
          </div>
          <p className="text-white/70 text-details max-w-[800px]">Developer with experience in web design and a strong focus on web development using React. I create professional and business-oriented websites, including landing pages, static and dynamic pages, e-commerce platforms, and streaming sites. If you are interested in working together, feel free to contact me.</p>
        </div>
        <div className="flex gap-4">
          <Link title="GitHub" href="https://github.com/AkiraYago" className="bg-c-dblue border border-white w-fit p-2 rounded-md">
            <Image src="./icons/github.svg" alt="icon" width={40} height={40} />
          </Link>
          <Link title="LinkedIn" href="https://www.linkedin.com/in/yagoellen/" className="bg-c-dblue border border-white w-fit p-2 rounded-md">
            <Image src="./icons/linkedin.svg" alt="icon" width={40} height={40} />
          </Link>
          <Link title="Curriculum" href="https://drive.google.com/drive/folders/12QjxpRUhqNEbNsiSYFjxiI-kKza7LEKJ?usp=sharing" className="bg-c-dblue border border-white w-fit p-2 rounded-md">
            <Image src="./icons/cv.svg" alt="icon" width={40} height={40} />
          </Link>
        </div>
      </article>
    </section>
  )
}

export default About