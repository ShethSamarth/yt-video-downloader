"use client"

import axios from "axios"
import { toast } from "sonner"
import { KeyboardEvent, useState } from "react"
import { Clipboard, Loader } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { VideoPreview } from "./video-preview"

export const Hero = () => {
  const [url, setUrl] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<VideoDetails | null>(null)

  const handlePaste = async () => {
    const data = await navigator.clipboard.readText()
    setUrl(data)
  }

  const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSubmit()
    }
  }

  const handleSubmit = async () => {
    if (url === "") {
      setError("Enter a URL.")
      return
    } else if (!url.startsWith("https://www.youtube.com/watch?v=")) {
      setError("Please enter a valid YouTube URL.")
      return
    } else {
      setError("")
    }

    try {
      setLoading(true)

      const videoDetails = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/get_video_details`,
        { url }
      )

      setData({ ...videoDetails.data, url })
    } catch {
      toast.error("Failed to fetch video details!", {
        description: "Try again with some other URL."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-20 text-white dark:from-purple-600 dark:via-pink-700 dark:to-red-700 sm:px-6 lg:px-8">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col gap-y-4 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Download YouTube Videos with Ease
          </h1>
          <p className="text-xl sm:text-2xl">
            Fast, simple, and reliable YouTube video downloads for all your
            needs.
          </p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Input
              type="url"
              value={url}
              onKeyDown={onKeyDown}
              placeholder="Paste YouTube URL here"
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow bg-white pr-12 text-black dark:bg-gray-800 dark:text-white"
            />
            <Button
              variant="ghost"
              disabled={loading}
              onClick={handlePaste}
              className="absolute right-0 top-0 rounded-l-none"
            >
              <Clipboard className="size-5 text-black dark:text-white" />
            </Button>
            {error && <p className="mt-1 text-sm">* {error}</p>}
          </div>

          <Button
            disabled={loading}
            onClick={handleSubmit}
            className="min-w-32 whitespace-nowrap"
          >
            {loading ? (
              <Loader className="size-5 animate-spin" />
            ) : (
              "Download Now"
            )}
          </Button>
        </div>

        {data && <VideoPreview data={data} />}
      </div>
    </section>
  )
}
