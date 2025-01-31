import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  fields: [
    {
        name: 'name',
        label: 'Nom de la certification',
        type: 'text',
        required: true,
      },
      {
        name: 'link',
        label: 'Lien vers le site de la certification',
        type: 'text',
        required: false,
        admin: {
          placeholder: 'https://example.com',
        }
      },
      {
        name: 'logo',
        label: 'Logo ou image de la certification',
        type: 'upload',
        relationTo: 'media',
        required: true,
      }
    // Email added by default
    // Add more fields as needed
  ],
}
