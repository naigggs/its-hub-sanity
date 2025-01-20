import {defineField, defineType} from 'sanity'
import {v4 as uuidv4} from 'uuid'

export default defineType({
  name: 'blogData',
  title: 'Blog Data',
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
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
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
            },{
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
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Text',
                      type: 'text',
                    }),
                    defineField({
                      name: 'list',
                      title: 'List',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'item',
                              title: 'Item',
                              type: 'string',
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'conclusionTitle',
      title: 'Conclusion Title',
      type: 'string',
    }),
    defineField({
      name: 'conclusionDescription',
      title: 'Conclusion Description',
      type: 'text',
    }),
  ],
})
