import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'hero_title',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'hero_subtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section1_cards',
      title: 'Section 1 Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogDetails'}]}],
    }),     
    defineField({
      name: 'date_created',
      title: 'Date Created',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      initialValue: () => new Date().toISOString(),
    })
  ],
  preview: {
    select: {
      title: 'date_created',
      media: 'image',
    },
  },
})
