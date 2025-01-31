import { GlobalConfig } from 'payload'

export const HomeCarousel: GlobalConfig = {
  slug: 'home_carousel',
  fields: [
    {
        name:'images',
        label: 'Images du carousel principal',
        type: "upload",
        relationTo: 'media',
        hasMany: true
    },
  ],
}