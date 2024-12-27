import { Software } from "@/types"
import SoftwareItem from "../_common/SoftwareItem"
import Image from "next/image"
import Link from "next/link"

interface Props {
  title: string
  description: string
  coverImg: string
  softwareStack: Software[]
  productionURL: string
}

const ProjectCard = ({ title, description, coverImg, softwareStack, productionURL }: Props) => {
  return (
    <article className="bg-c-blue p-4 rounded-lg border max-w-[500px]">
      <section className="relative h-fit">
        <Image className="w-full rounded-lg" src={coverImg} alt="project-img" width={300} height={300} />
        <div className="absolute bottom-0 flex text-white text-center w-full p-2">
          <Link href={productionURL} className="bg-black/70 h-fit hover:bg-c-unique font-bold p-buttons rounded-md">Go to website</Link>
        </div>
      </section>
      <section className="grid gap-4 mt-4">
        <h3 className="font-bold text-white text-h3-phone md:text-h3-tablet lg:text-h3-desktop">{title}</h3>
        <p className="text-white/70 h-32">{description}</p>
        <ul className="flex gap-4">
          {
            softwareStack.map(software =>
              <SoftwareItem
                key={`software-item-${software.id}`}
                name={software.name}
                icon={software.icon}
              />
            )
          }
        </ul>
      </section>
    </article>
  )
}

export default ProjectCard