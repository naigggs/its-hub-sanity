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
      title: 'S1 Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
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
      title: 'S2 Badge',
      type: 'string',
    }),
    defineField({
      name: 'section_2_heading',
      title: 'S2 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section_2_subheading',
      title: 'S2 Subheading',
      type: 'string',
    }),
    defineField({
      name: 'section_2_button',
      title: 'S2 Button',
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
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
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
      title: 'S2 Badge 2',
      type: 'string',
    }),
    defineField({
      name: 'section_2_stats',
      title: 'S2 Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'section_2_footer_heading',
      title: 'S2 Footer Heading',
      type: 'string',
    }),
    defineField({
      name: 'section_2_footer_subheading',
      title: 'S2 Footer Subheading',
      type: 'string',
    }),
    defineField({
      name: 'section_2_footer_button',
      title: 'S2 Footer Button',
      type: 'string',
    }),
    defineField({
      name: 'section_3_image',
      title: 'S3 Image',
      type: 'image',
    }),
    defineField({
      name: 'section_3_cards',
      title: 'S3 Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
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
      title: 'S4 Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'section_5_images',
      title: 'S5 Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'section_5_badge',
      title: 'S5 Badge',
      type: 'string',
    }),
    defineField({
      name: 'section_5_heading',
      title: 'S5 Heading',
      type: 'string',
    }),
    defineField({
      name: 'section_5_subheading',
      title: 'S5 Subheading',
      type: 'string',
    }),
    defineField({
      name: 'section_5_button',
      title: 'S5 Button',
      type: 'string',
    }),
    defineField({
      name: 'section_6_testimonials',
      title: 'S6 Testimonials',
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
        title: 'S7 Image',
        type: 'image',
    }),
    defineField({
        name: 'section_7_heading',
        title: 'S7 Heading',
        type: 'string',
    }),
    defineField({
        name: 'section_7_subheadings',
        title: 'S7 Subheadings',
        type: 'array',
        of: [{ type: 'string' }],
    }),
    defineField({
        name: 'section_7_button_1',
        title: 'S7 Button 1',
        type: 'string',
    }),
    defineField({
        name: 'section_7_button_2',
        title: 'S7 Button 2',
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
