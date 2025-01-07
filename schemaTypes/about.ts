import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
        name: 'section_1',
        title: 'Section 1 Card',
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
                name: 'section_button1',
                title: 'Section Button 1',
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
        title: 'Section Stats',
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
        name: 'section_2_text',
        title: 'Section 2 text',
        type: 'string',
      }),   
      defineField({ 
        name: 'section_3_heading',
        title: 'Section 3 Heading',
        type: 'string',
      }),     
      defineField({ 
        name: 'section_3_button',
        title: 'Section 3 Button',
        type: 'string',
      }),   
      defineField({
        name: 'section_3_card1',
        title: 'Section 3 Card 1',
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
                name: 'image',
                title: 'Image',
                type: 'image',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'section_3_card2',
        title: 'Section 3 Card 2',
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
                name: 'image',
                title: 'Image',
                type: 'image',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'section_3_card3',
        title: 'Section 3 Card 3',
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
                name: 'image',
                title: 'Image',
                type: 'image',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'section_3_card4',
        title: 'Section 3 Card 4',
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
                name: 'image',
                title: 'Image',
                type: 'image',
              }),
            ],
          },
        ],
      }),
      defineField({ 
        name: 'section_4_heading',
        title: 'Section 4 Heading',
        type: 'string',
      }),    
      defineField({
        name: 'section_4_cards',
        title: 'Section 4 Cards',
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
        title: 'S5 Testimonials',
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
        name: 'section_6_heading',
        title: 'S6 Footer Heading',
        type: 'string',
      }),
      defineField({
        name: 'section_6_subheading',
        title: 'S6 Subheading',
        type: 'string',
      }),
      defineField({
        name: 'section_6_button',
        title: 'S6 Button',
        type: 'string',
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
