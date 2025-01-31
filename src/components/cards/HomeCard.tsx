import React from 'react'
import Image from 'next/image'

export default function HomeCard({
  title,
  src,
  alt,
  children,
  link,
}: {
  title: string
  src: string
  alt: string
  children: any
  link: string
}) {
  return (
    <a href={link}>
      <div className="card bg-neutral-900 max-w-96 shadow-sm h-full fx-moveUp">
        <figure>
          <Image
            src={src}
            alt={alt}
            width={300}
            height={100}
         
            className="rounded-t-xl lg:rounded-t-xl md:w-full md:p-0 aspect-video object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center mx-auto">{title}</h2>
          <div className='h-full flex flex-col justify-evenly'>
          {children}
          </div>
       
          <div className="card-actions justify-center">
      <button className="btn btn-primary">En savoir +</button>
    </div>
        </div>
      </div>
    </a>
  )
}
