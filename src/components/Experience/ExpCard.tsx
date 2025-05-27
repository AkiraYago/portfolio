import { getSoftwareIcon, getSoftwareName } from "@/helpers"
import { type Experience } from "@/types"
import Image from "next/image"
import Link from "next/link"
import SoftwareItem from "../_common/SoftwareItem"

const ExpCard = ({ id, coverImg, role, company, websiteURL, dates, description, softwareStack }: Experience) => {
  return (
    <article className="block lg:flex w-full rounded-lg min-h-card border h-full p-4">
      <section className="lg:basis-2/5 lg:h-full h-[300px] relative rounded-l-lg">
        <Image className="object-cover w-full h-full rounded-lg" src={coverImg} alt="cover-img" width={400} height={200} />
        <div className="absolute bottom-0 flex text-white text-center w-full p-2">
          {websiteURL ?
            <Link href={websiteURL} className="bg-black/70 h-fit hover:bg-c-unique font-bold p-buttons rounded-md">Go to website</Link> :
            <span className="bg-c-dblue/70 py-1 px-3 rounded-full text-xs cursor-not-allowed">Link no avaible</span>
          }
        </div>
      </section>
      <section className="lg:basis-3/5 flex flex-col gap-8 p-2 lg:p-4 text-white w-full rounded-r-lg">
        <header>
          <div>
            <h3 className="text-h3-phone md:text-h3-tablet lg:text-h3-desktop font-bold">{role}</h3>
            <span>{company}</span>
          </div>
          <p className="text-white/70 text-end">{dates}</p>
        </header>
        <main className="grid gap-4">
          <p className="text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {softwareStack.map(software =>
              <li key={`software-item-${id}-${software}`}>
                <SoftwareItem
                  name={getSoftwareName(software)}
                  icon={getSoftwareIcon(software)}
                />
              </li>
            )}
          </ul>
        </main>
      </section>
    </article>
  )
}

export default ExpCard