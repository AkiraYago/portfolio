import { Software } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface Props {
  coverImg: string
  role: string
  company: string
  websiteURL: string
  dates: string
  description: string
  softwareStack: Software[]
}

const ExpCard = ({ coverImg, role, company, websiteURL, dates, description, softwareStack }: Props) => {
  return (
    <article className="block lg:flex w-full rounded-lg min-h-card border h-full p-4">
      <section className="lg:basis-2/5 lg:h-full h-[300px] relative rounded-l-lg">
        <Image className="object-cover w-full h-full rounded-lg" src={coverImg} alt="cover-img" width={400} height={200} />
        <div className="absolute bottom-0 flex text-white text-center w-full p-2">
          <Link href={websiteURL} className="bg-black/70 h-fit hover:bg-c-unique font-bold p-buttons rounded-md">Go to website</Link>
        </div>
      </section>
      <section className="lg:basis-3/5 flex flex-col gap-8 p-2 lg:p-4 text-white w-full rounded-r-lg">
        <CardHeader
          role={role}
          company={company}
          dates={dates}
        />
        <CardBody
          description={description}
          softwareStack={softwareStack}
        />
      </section>
    </article>
  )
}

// SUB-COMPONENTS
// ------------------------------------------------------------------------------------------------

const CardHeader = (
  { role, company, dates }: { role: string, company: string, dates: string }
) => {
  return (
    <header>
      <div>
        <h3 className="text-h3-phone md:text-h3-tablet lg:text-h3-desktop font-bold">{role}</h3>
        <span>{company}</span>
      </div>
      <p className="text-white/70 text-end">{dates}</p>
    </header>
  )
}

const CardBody = (
  { description, softwareStack }: { description: string, softwareStack: Software[] }
) => {
  return (
    <li className="grid gap-4">
      <p className="text-white/70">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2 lg:gap-4">
        {
          softwareStack.map(software =>
            <li key={`software-item-${software.id}`}>
              <SoftwareItem
                name={software.name}
                icon={software.icon}
              />
            </li>
          )
        }
      </ul>
    </li>
  )
}

const SoftwareItem = (
  { name, icon }: { name: string, icon: string }
) => {
  return (
    <article className="p-2 bg-c-dblue rounded-md border" title={name}>
      <Image className="w-[30px] lg:w-[40px]" src={icon} alt="icon" width={40} height={40} />
    </article>
  )
}

export default ExpCard