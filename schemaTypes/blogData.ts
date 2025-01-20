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
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'introduction_title',
      title: 'Introduction Title',
      type: 'string',
    }),
    defineField({
      name: 'introduction_description',
      title: 'Introduction Description',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
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
              name: 'description',
              title: 'Description',
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
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'image_1',
                      title: 'Image 1',
                      type: 'image',
                    }), 
                    defineField({
                      name: 'image_2',
                      title: 'Image 2',
                      type: 'image',
                    }), 
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'conclusion_title',
      title: 'Conclusion Title',
      type: 'string',
    }),
    defineField({
      name: 'conclusion_description',
      title: 'Conclusion Description',
      type: 'text',
    }),
  ],
})
