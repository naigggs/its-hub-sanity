import {defineField, defineType} from 'sanity'
import { v4 as uuidv4 } from 'uuid';

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
          name: 'button',
          title: 'button',
          type: 'string',
        }),
    ],
});