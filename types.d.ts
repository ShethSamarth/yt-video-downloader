interface VideoDetails {
  channel: string
  description: string
  formats: Format[]
  thumbnail: string
  title: string
  views: number
  upload_date: string
}

interface Format {
  ext: string
  file_size: string
  format_id: string
  resolution: string
}
