import React from 'react'
import HomeHero from '@/components/heros/HomeHero'
import HomeCardSection from '@/components/sections/HomeCardSection'
import Partenaires from '@/components/logo-clouds/Partenaires'
import Certifications from '@/components/logo-clouds/Certifications'
import ToTop from '@/components/tools/ToTop'
import PostPreview from '@/components/content/PostPreview'

export default function page() {
  return (
    <div>
    <HomeHero />
    <HomeCardSection />

    {/* link to DB */}
    <Partenaires />
    <PostPreview />
    <Certifications />
    <ToTop  />

    


    </div>

    // <MyCardSection />

    // z

    // <MyPostsPreview />

    // <MyReviews />

    // <Certifications />

    // <ToTop />
  )
}
