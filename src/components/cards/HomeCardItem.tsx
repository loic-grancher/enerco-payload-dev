import React from 'react'
import Image from 'next/image'

export default function HomeCardItem({ text, src, alt }: { text: string, src: string, alt: string }) {
  return (
    <div className="flex gap-2 my-2">
    <Image src={src} className="text-xl text-primary invert" alt={alt} width={20} height={20} />
    <p className="opacity-70">{text}</p>
</div>
  )
}
