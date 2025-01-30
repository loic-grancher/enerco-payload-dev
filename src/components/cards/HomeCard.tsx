import React from 'react'
import Image from 'next/image'

export default function HomeCard( { title, src, alt, children, link }: { title: string, src: any, alt: string, children: any, link: string} ) {
  return (
    <a href={link}>
    <div
        className="bg-darker bg-opacity-50 rounded-xl flex flex-col items-center hover:scale-105 duration-200 hover:bg-slate-800 h-full md:w-full sm:w-3/4 mx-auto"
    >
        <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="rounded-t-xl lg:rounded-t-xl md:w-full md:p-0 aspect-video object-cover"
        />

        <div className="px-4 flex flex-col py-8 gap-8">
            <div className="flex  items-center min-h-20">
                <h3 className="">{title}</h3>
            </div>
          {children}
        </div>
    </div>
</a>
  )
}
