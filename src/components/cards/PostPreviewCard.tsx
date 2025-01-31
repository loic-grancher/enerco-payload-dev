import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default function PostPreviewCard({
    title,
    date,
    image,
}: {
    title: string
    date: string
    image: Media
}) {
    // const variations = {
    //     none: "grid grid-cols-1 grid-rows-1 hover:scale-125 duration-200  rotate-0 transition aspect-square rounded-xl",
    //     right: "grid grid-cols-1 grid-rows-1 hover:scale-125 duration-200 hover:rotate-0 rotate-12 transition aspect-square rounded-xl",
    //     left: "grid grid-cols-1 grid-rows-1 hover:scale-125 duration-200 hover:rotate-0 -rotate-12 transition aspect-square rounded-xl",
    // };

    const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
  return (
    <a
      href={`/posts/${title}`}
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}
    >
      <div className="bg-darker/40 hover:bg-darker/0 flex flex-col justify-end items-center p-4">
        <p className="opacity-70 text-sm">{formattedDate}</p>
        <h3 className="md:text-sm lg:text-lg">{title}</h3>
      </div>
    </a>
  )
}
