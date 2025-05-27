import Image from "next/image"

interface Props {
  name: string
  icon: string
}

const SoftwareItem = ({ name, icon }: Props) => {
  return (
    <article className="flex gap-1 items-center p-2 bg-c-blue/60 rounded-md shadow-md w-fit text-white" title={name}>
      <Image src={icon} alt="icon" width={20} height={20} />
      <p className="text-sm">{name}</p>
    </article>
  )
}

export default SoftwareItem