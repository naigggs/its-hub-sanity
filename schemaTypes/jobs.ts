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
      name: 'job_title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'job_badges',
      title: 'Job Badges',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'job_description',
      title: 'Job Description',
      type: 'text',
    }),
    defineField({
      name: 'job_qualifications',
      title: 'Job Qualifications',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'job_responsibilities',
      title: 'Job Responsibilities',
      type: 'array',
      of: [{type: 'text'}],
    }),
  ],
  preview: {
    select: {
      title: 'job_title',
    },
  },
})
