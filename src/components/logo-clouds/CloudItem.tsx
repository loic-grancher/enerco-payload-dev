import React from 'react'
import Image from 'next/image'

export default function CloudItem({link, imagePath, alt}: {link: string, imagePath: string, alt: string}) {
  return (
    <div className='fx-zoom'>
      <a href={link} >
        <div>
          <Image src={imagePath} alt={alt} width={300} height={300}/>
        </div>
      </a>
    </div>
  )
}
