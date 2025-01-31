import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  fields: [
    {
        name: 'name',
        label: 'Nom du tag',
        type: 'text',
        required: true,
      },
    // Email added by default
    // Add more fields as needed
  ],
}
