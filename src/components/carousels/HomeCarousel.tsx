import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import HomeCarouselSlide from './HomeCarouselSlide'

export default async function HomeCarousel() {
  const payload = await getPayload({ config })
  const imagesData = await payload.findGlobal({
    slug: 'home_carousel',
  })
  const images = imagesData.images as Media[]
  return (

   <HomeCarouselSlide images={images}/>
  )
}
