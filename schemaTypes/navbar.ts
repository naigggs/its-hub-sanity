import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
]
});