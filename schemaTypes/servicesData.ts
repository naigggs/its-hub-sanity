import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'

export default defineType({
  name: 'servicesData',
  title: 'Services Data',
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
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
    }),
    defineField({
      name: 'bodyTitle',
      title: 'Body Title',
      type: 'object',
      fields: [
        defineField({
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'miniTitle',
                  title: 'Mini Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'collabTitle',
      title: 'Collab Title',
      type: 'string',
    }),
    defineField({
      name: 'collabDescription',
      title: 'Collab Description',
      type: 'text',
    }),
  ],
})
