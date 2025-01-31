import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import OverlayCard from '../cards/OverlayCard'

const payload = await getPayload({ config })
const postCollection = await payload.find({
  collection: 'posts',
  limit: 4,
  sort: ['-date'],
})
const posts = postCollection.docs

export default function PostPreview() {
  return (
    <section
      className="section flex flex-col items-center gap-8"
      x-data="{ shown: false }"
      x-intersect="shown = true"
    >
      <h2>Nos projets récents</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 " x-show="shown">
        {posts.map((post) => {
          const images = post.images as Media[]
          return (
            <OverlayCard
              key={post.id}
              title={post.title}
              date={post.publicationDate}
              image={images[0]}
            />
          )
        })}
      </div>
      <a href="/actus">
        <button className="btn btn-primary">Voir plus</button>
      </a>
    </section>
  )
}
