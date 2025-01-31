import React from 'react'
import Image from 'next/image'
import Icon from '/icons/drop.svg'

export default function HomeCardItem({ text, src, alt }: { text: string, src: string, alt: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 my-2">
    <Image src={src} className="text-xl text-primary icon-red" alt={alt} width={20} height={20} />
    <p className="opacity-70">{text}</p>
</div>
  )
}
