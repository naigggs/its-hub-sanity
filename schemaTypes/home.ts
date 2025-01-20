import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      name: 'hero_button',
      title: 'Hero Button',
      type: 'string',
    }),
    defineField({
      name: 'hero_button_2',
      title: 'Hero Button 2',
      type: 'string',
    }),
    defineField({
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'section_1',
      title: 'Section 1 Fields',
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
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'section_1_button',
      title: 'S1 Button',
      type: 'string',
    }),


    defineField({
      name: 'section_2_badge',
      title: 'Section 2 Badge',
      type: 'string',
    }),
    defineField({
      name: 'section_2_title',
      title: 'Section 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_2_subtitle',
      title: 'Section 2 Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section_2_button',
      title: 'Section 2 Button',
      type: 'string',
    }),
    defineField({
      name: 'section_2_cards',
      title: 'S2 Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'Title',
              title: '',
              type: 'string',
            }),
            defineField({
              name: 'Subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'section_2_badge_2',
      title: 'Section 2 Badge 2',
      type: 'string',
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
              title: 'Title',
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
      name: 'section_2_footer_title',
      title: 'Section 2 Footer Title',
      type: 'string',
    }),
    defineField({
      name: 'section_2_footer_subtitle',
      title: 'Section 2 Footer Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section_2_footer_button',
      title: 'S2 Footer Button',
      type: 'string',
    }),


    defineField({
      name: 'section_3_image',
      title: 'Section 3 Image',
      type: 'image',
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
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
          ],
        },
      ],
    }),


    defineField({
      name: 'section_4',
      title: 'Section 4 Fields',
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
          ],
        },
      ],
    }),


    defineField({
      name: 'section_5_images',
      title: 'Section 5 Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'section_5_badge',
      title: 'Section 5 Badge',
      type: 'string',
    }),
    defineField({
      name: 'section_5_title',
      title: 'Section 5 Title',
      type: 'string',
    }),
    defineField({
      name: 'section_5_subtitle',
      title: 'Section 5 Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'section_5_button',
      title: 'Section 5 Button',
      type: 'string',
    }),


    defineField({
      name: 'section_6_testimonials',
      title: 'Section 6 Testimonials',
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
        name: 'section_7_image',
        title: 'Section 7 Image',
        type: 'image',
    }),
    defineField({
        name: 'section_7_title',
        title: 'Section 7 Title',
        type: 'string',
    }),
    defineField({
        name: 'section_7_subtitle',
        title: 'Section 7 Subtitle',
        type: 'array',
        of: [{ type: 'string' }],
    }),
    defineField({
        name: 'section_7_button_1',
        title: 'Section 7 Button 1',
        type: 'string',
    }),
    defineField({
        name: 'section_7_button_2',
        title: 'Section 7 Button 2',
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
    })
  ],
  preview: {
    select: {
      title: 'date_created',
      media: 'image',
    },
  },
})
