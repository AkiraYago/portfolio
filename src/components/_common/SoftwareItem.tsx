import Image from "next/image"

interface Props {
  name: string
  icon: string
}

const SoftwareItem = ({ name, icon }: Props) => {
  return (
    <article className="p-2 bg-c-dblue rounded-md border w-fit" title={name}>
      <Image className="w-[30px] lg:w-[40px]" src={icon} alt="icon" width={40} height={40} />
    </article>
  )
}

export default SoftwareItem