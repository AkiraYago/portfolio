import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-32">
      <div className="flex flex-col items-center gap-8 p-section-phone md:p-section-tablet lg:p-section-desktop">
        <section className="text-details text-white text-center">
          <p>Copyright AkiraYago</p>
          <p>All rights reserved</p>
        </section>
        <section className="flex gap-4">
          <Link href="https://www.linkedin.com/in/yagoellen/">
            <Image title="LinkedIn" src="/icons/linkedin.svg" alt="linkedin" width={40} height={40} />
          </Link>
          <Link href="https://github.com/AkiraYago">
            <Image title="GitHub" src="/icons/github.svg" alt="github" width={40} height={40} />
          </Link>
          <Link href="https://drive.google.com/drive/folders/12QjxpRUhqNEbNsiSYFjxiI-kKza7LEKJ?usp=sharing">
            <Image title="Curriculum" src="/icons/cv.svg" alt="curriculum" width={40} height={40} />
          </Link>
        </section>
      </div>
    </footer>
  )
}

export default Footer