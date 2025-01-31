import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'firstName',
      label: 'Prénom',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      label: 'Nom de famille',
      type: 'text',
      required: false,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
