import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'

export default defineType({
  name: 'jobs',
  title: 'Jobs',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      initialValue: () => uuidv4(),
      readOnly: true,
    }),
    defineField({
      name: 'hero_badge',
      title: 'Hero Badge',
      type: 'string',
    }),
    defineField({
      name: 'hero_heading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'hero_subheading',
      title: 'Hero Subheading',
      type: 'string',
    }),
    defineField({
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section1_heading',
      title: 'Section 1 Heading',
      type: 'string',
    }),
    defineField({
      name: 'job_descriptions',
      title: 'Job Descriptions',
      type: 'array',
      of: [{type: 'text'}],
    }),
  ],
  preview: {
    select: {
      title: 'hero_heading',
      media: 'hero_image',
    },
  },
})
