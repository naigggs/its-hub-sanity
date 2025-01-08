import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
      name: 'card1_title',
      title: 'Card 1 Title',
      type: 'string',
    }),
    defineField({
      name: 'card2_image',
      title: 'Card 2 Image',
      type: 'image',
    }),
    defineField({
      name: 'section2_title',
      title: 'Section 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'section2_subtitle',
      title: 'Section 2 Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section2_image1',
      title: 'Section 2 Image 1',
      type: 'image',
    }),
    defineField({
      name: 'section2_image2',
      title: 'Section 2 Image 2',
      type: 'image',
    }),
    defineField({
      name: 'section2_image3',
      title: 'Section 2 Image 3',
      type: 'image',
    }),
    defineField({
      name: 'section2_steps',
      title: 'Section 2 Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step_no',
              title: 'Step No.',
              type: 'number',
            }),
            defineField({
              name: 'step_title',
              title: 'Step Title',
              type: 'string',
            }),
            defineField({
              name: 'step_subtitle',
              title: 'Step Subtitle',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'location_cards',
      title: 'Location Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'card_image',
              title: 'Card Image',
              type: 'image',
            }),
            defineField({
              name: 'card_title',
              title: 'Card Title',
              type: 'string',
            }),
            defineField({
              name: 'card_subtitle',
              title: 'Card Subtitle',
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
