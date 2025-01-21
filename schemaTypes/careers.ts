import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careers',
  title: 'Careers',
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
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'hero_button',
      title: 'Hero Button',
      type: 'string',
    }),
    defineField({
      name: 'section_1_title',
      title: 'Section 1 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_1_subtitle',
      title: 'Section 1 Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section1_cards',
      title: 'Section 1 Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'jobs'}]}],
    }),

    
    defineField({
      name: 'section_2_title',
      title: 'Section 2 title',
      type: 'string',
    }),
    defineField({
      name: 'section_2_button',
      title: 'Section 2 Button',
      type: 'string',
    }),
    defineField({
      name: 'date_created',
      title: 'Date Created',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
  ],
  preview: {
    select: {
      title: 'date_created',
      media: 'hero_image',
    },
  },
})
