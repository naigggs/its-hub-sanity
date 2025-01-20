import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'hero_badge',
      title: 'Hero Badge',
      type: 'string',
    }),
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
      name: 'section_1',
      title: 'Section 1 Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),


    defineField({
      name: 'section_2_stats',
      title: 'Section 2 Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'section_2_text',
      title: 'Section 2 Text',
      type: 'string',
    }),


    defineField({
      name: 'section_3_title',
      title: 'Section 3 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_3_button',
      title: 'Section 3 Button',
      type: 'string',
    }),
    defineField({
      name: 'section_3_cards',
      title: 'Section 3 Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),


    defineField({
      name: 'section_5_testimonials',
      title: 'Section 5 Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'message',
              title: 'Message',
              type: 'text',
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),

            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
            }),
          ],
        },
      ],
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
      media: 'image',
    },
  },
})
