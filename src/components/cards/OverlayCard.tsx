import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default function OverlayCard({
  title,
  date,
  image,
}: {
  title: string
  date: string
  image: Media
}) {
  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString('fr')

  return (
   
      <div className="card bg-neutral-950 image-full  shadow-sm aspect-video fx-zoom ">
        <figure className="">
          <Image src={image?.url ?? ''} alt={image?.alt} width={300} height={300} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title break-all">{title}</h2>
          <p>{formattedDate}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary">Voir</button>
          </div>
        </div>
      </div>
  
  )
}
