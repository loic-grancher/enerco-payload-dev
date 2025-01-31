import React from 'react'
import Image from 'next/image'


export default function ToTop() {
  return (
    <div >
    <div className="flex justify-center md:text-lg lg:text-xl" x-data="{ shown: false }" x-intersect="shown = true">
        <a href="#top"  aria-label="Go to top" className="flex flex-col items-center" x-show="shown"> 
            <Image src="/icons/arrowUp.svg" alt="fleche vers le haut" width={30} height={30} className='invert' /> 
            <p className="underline underline-offset-4 hover:no-underline text-sm">Haut de la page</p>
            
        </a>
    </div>
</div>
  )
}
