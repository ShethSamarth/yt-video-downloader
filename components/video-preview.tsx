"use client"

import axios from "axios"
import Image from "next/image"
import { toast } from "sonner"
import { useState } from "react"
import { Play, Download, Loader } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { filterFormats, formatViews, getDateDifference } from "@/lib/utils"

interface VideoPreviewProps {
  data: VideoDetails
}

export const VideoPreview = ({ data }: VideoPreviewProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedQuality, setSelectedQuality] = useState<string>()

  const filteredFormats = filterFormats(data.formats)

  const handleOpenUrl = () => {
    window.open(data.url, "_blank", "noopener,noreferrer")
  }

  const handleDownload = async (url: string) => {
    setLoading(true)

    try {
      const resolution = selectedQuality?.replace("p", "")

      const videoData = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/download-video`,
        { url, resolution }
      )

      const fileName = videoData.data.file_name

      const video = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/get_video/${fileName}`,
        { responseType: "blob" }
      )

      const fileURL = window.URL.createObjectURL(new Blob([video.data]))
      const fileLink = document.createElement("a")

      fileLink.href = fileURL
      fileLink.setAttribute("download", fileName)
      document.body.appendChild(fileLink)
      fileLink.click()
      fileLink.remove()

      toast.success("Successfully downloaded video!")
    } catch {
      toast.error("Failed to download video!", {
        description: "Try again with a different resolution."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-2/5">
          <div className="relative aspect-video size-full">
            <Image
              layout="fill"
              objectFit="cover"
              src={data.thumbnail}
              alt="Video thumbnail"
              className="rounded-t-lg bg-gray-300 md:rounded-l-lg md:rounded-t-none"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="secondary"
                aria-label="Play video"
                onClick={handleOpenUrl}
                className="rounded-full bg-white/25 backdrop-blur-sm hover:bg-white/50"
              >
                <Play className="size-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6 md:w-3/5">
          <h3 className="mb-2 truncate text-xl font-semibold text-gray-800 dark:text-white">
            {data.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            {data.channel} • {formatViews(data.views)} views •{" "}
            {getDateDifference(data.upload_date)}
          </p>

          <p className="mb-6 line-clamp-3 text-gray-700 dark:text-gray-200">
            {data.description}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="w-full sm:w-auto">
              <Select
                disabled={loading}
                value={selectedQuality}
                onValueChange={setSelectedQuality}
              >
                <SelectTrigger className="w-full text-black dark:text-white sm:w-[180px]">
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent>
                  {filteredFormats.map((quality) => (
                    <SelectItem
                      key={quality.format_id}
                      value={quality.resolution}
                    >
                      {quality.resolution}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedQuality && (
              <Button
                className="w-full sm:w-auto"
                disabled={!selectedQuality || loading}
                onClick={() => handleDownload(data.url)}
              >
                {loading ? (
                  <Loader className="mr-2 size-4 animate-spin" />
                ) : (
                  <Download className="mr-2 size-4" />
                )}
                {"Download " + selectedQuality}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
