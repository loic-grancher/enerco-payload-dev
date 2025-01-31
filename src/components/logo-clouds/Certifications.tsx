import React from 'react'
import CloudItem from './CloudItem'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'

export default async function Certifications() {
  const payload = await getPayload({ config })
  const certificationsCollection = await payload.find({
    collection: 'certifications',
  })

  const certifications = certificationsCollection.docs
 
  return (
    <section
      className="section flex flex-col items-center gap-10"
      x-data="{ shown: false }"
      x-intersect="shown = true"
    >
      <h2>Nos certifications</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 " x-show="shown">
        {certifications.map((certification) => {
        
        const logo = certification.logo as Media
        return (
            <CloudItem
            key={certification.id}
            link={certification.link? certification.link : "#"}
            imagePath={logo.url? logo.url : ""}
            alt={logo.alt}
          />
        )
      
        })}
      </div>
    </section>
  )
}
