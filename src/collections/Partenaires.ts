import type { CollectionConfig } from 'payload'

export const Partenaires: CollectionConfig = {
  slug: 'partenaires',
  fields: [
    {
        name: 'name',
        label: 'Nom du partenaire',
        type: 'text',
        required: true,
      },
      {
        name: 'link',
        label: 'Lien vers le site du partenaire',
        type: 'text',
        required: false,
        admin: {
          placeholder: 'https://example.com',
        }
      },
      {
        name: 'logo',
        label: 'Logo du partenaire',
        type: 'upload',
        relationTo: 'media',
        required: true,
      }
    // Email added by default
    // Add more fields as needed
  ],
}
