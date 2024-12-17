import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatViews = (num: number) => {
  if (num < 1000) {
    return num.toString()
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K"
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M"
  } else {
    return (num / 1000000000).toFixed(1) + "B"
  }
}

export const getDateDifference = (dateString: string) => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) return "N/A"

  const today = new Date()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const diffInMilliseconds = today - date
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  if (diffInDays >= 365) {
    const diffInYears = Math.floor(diffInDays / 365)
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`
  } else if (diffInDays >= 30) {
    const diffInMonths = Math.floor(diffInDays / 30) // Approximate
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
  } else {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
  }
}

export const filterFormats = (formats: Format[]) => {
  const filteredFormats = []
  const seenResolutions = new Set()

  for (const format of formats) {
    if (
      format.file_size !== "Unknown" &&
      !format.resolution.includes("audio only") &&
      !seenResolutions.has(format.resolution)
    ) {
      seenResolutions.add(format.resolution)
      filteredFormats.push(format)
    }
  }

  return filteredFormats
}
