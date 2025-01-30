import React from 'react'

export default function CloudItem() {
  return (
    <div>
      <a href={url} class={variants[variant]}>
        <div>
          <Image src={images[imagePath]()} alt={alt} width={300} />
        </div>
      </a>
    </div>
  )
}
