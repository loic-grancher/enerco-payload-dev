import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'postType',
          label: 'Type de post',
          type: 'radio',
          required: true,
          options: [
            {
              label: 'Actualité',
              value: 'actualite',
            },
            {
              label: 'Article',
              value: 'article',
            },
           
          ],
        },
        {
          name: 'publicationDate',
          label: 'Date de mise en ligne',
          type: 'date',
         admin: {
           date: {
            displayFormat: 'dd/MM/yyyy',
           }
         },
          required: true,
        },
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          label: 'Auteur',
          type: 'relationship',
          relationTo: 'users',        
          required: true,
         
        },
        {
          name : 'category',
          label: 'Categorie',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Chaudière',
              value: 'chaudiere',
            },
            {
              label: 'Pompe à chaleur',
              value: 'pompe-a-chaleur',
            },
            {
              label: 'Plomberie',
              value: 'plomberie',
            },
            {
              label: 'Climatisation',
              value: 'climatisation',
            },
            {
              label: 'Autre',
              value: 'autre',
            }
        ]},
      ]
    },
   
   
    {
      name: 'tags',
      label: 'Tags',
      type: 'text',
      hasMany: true,
    },
    
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      maxRows: 5,
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      }
    },
  ],
}
