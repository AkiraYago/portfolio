interface Props {
  title: string
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="text-white font-bold text-h2-phone md:text-h2-tablet lg:text-h2-desktop text-center">{title}</h2>
  )
}

export default SectionTitle