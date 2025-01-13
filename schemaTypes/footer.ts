import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact and Follow Us on',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone1',
          title: 'Phone Number 1',
          type: 'string',
        }),
        defineField({
          name: 'phone2',
          title: 'Phone Number 2',
          type: 'string',
        }),
        defineField({
          name: 'phone3',
          title: 'Phone Number 3',
          type: 'string',
        }),
        defineField({
          name: 'address1',
          title: 'Address 1',
          type: 'string',
        }),
        defineField({
          name: 'address2',
          title: 'Address 2',
          type: 'string',
        }),
        defineField({
          name: 'address3',
          title: 'Address 3',
          type: 'string',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'servicesData' }] }],
    }),
    defineField({
      name: 'otherServices',
      title: 'Other Services',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
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
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'link_name',
      title: 'Link Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'date_created',
      media: 'logo',
    },
  },
});