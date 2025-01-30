import React from 'react'

export default function Partenaires() {
  return (
    <section class=" section flex flex-col items-center gap-10" x-data="{ shown: false }" x-intersect="shown = true">
    <h2>Nos partenaires</h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 " x-show="shown" >
        {
            logos.map((logo) => (
                    <MyLogoCloudItem
                    imagePath={logo.imagePath}
                        alt={logo.alt}
                        variant= "partenaires"
                        url={logo.url}
                    />
            ))
        }
    </div>
</section>
  )
}
