import softwares from "./lib/softwares"

export function getSoftwareIcon(id: string): string {
  return `/icons/software/${id}.svg`
}

export function getSoftwareName(id: string): string {
  return softwares.find(software => software.id === id)?.name || ""
}