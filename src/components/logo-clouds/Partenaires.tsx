import React from 'react'
import CloudItem from './CloudItem'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'

const payload = await getPayload({ config })

export default async function Partenaires() {
  const partenairesCollection = await payload.find({
    collection: 'partenaires',
  })
  const partenaires = partenairesCollection.docs
  // console.log(partenaires)
  return (
    <section className=" section flex flex-col items-center gap-10" x-data="{ shown: false }" x-intersect="shown = true">
    <h2>Nos partenaires</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 " x-show="shown" >
        {
            partenaires.map((partenaire) => {
              const logo = partenaire.logo as Media
                return (
                    <CloudItem key={partenaire.id} link={partenaire.link? partenaire.link : "#"} imagePath={logo.url ? logo.url : ""} alt={logo.alt ? logo.alt : ""} />
                )
            })
           
        }
    </div>
</section>
  )
}
