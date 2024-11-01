import SectionTitle from "@/components/_common/SectionTitle"
import ExpCard from "@/components/Experience/ExpCard"
import { Experience as Exp } from "@/types"

interface Props {
  experienceData: Exp[] | undefined
}

const Experience = ({ experienceData = [] }: Props) => {
  return (
    <section id="experience" className="bg-gradient-to-t from-c-dblue to-black p-section-phone md:p-section-tablet lg:p-section-desktop flex justify-center">
      <div className="grid gap-24 max-w-maximum">
        <SectionTitle title="Experience" />
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 grid-rows-1">
          {
            experienceData.map(experience =>
              <ExpCard
                key={`exp-card-${experience.id}`}
                coverImg={experience.coverImg}
                role={experience.role}
                company={experience.company}
                websiteURL={experience.websiteURL}
                dates={experience.dates}
                description={experience.description}
                softwareStack={experience.softwareStack}
              />
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Experience