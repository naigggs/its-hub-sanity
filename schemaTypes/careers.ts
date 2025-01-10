import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'careers',
    title: 'Careers',
    type: 'document',
    fields: [
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
        }),
        defineField({
            name: 'hero_button',
            title: 'Hero Button',
            type: 'string',
        }),
        defineField({
            name: 'section1_heading',
            title: 'Section 1 Heading',
            type: 'string',
        }),
        defineField({
            name: 'section1_subheading',
            title: 'Section 1 Subheading',
            type: 'string',
        }),
        defineField({
            name: 'section1_cards',
            title: 'Section 1 Cards',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'jobs'}]}],
        }),
        defineField({
            name: 'section2_heading',
            title: 'Section 2 Heading',
            type: 'string',
        }),
        defineField({
            name: 'section2_button',
            title: 'Section 2 Button',
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
        }),
    ],
    preview: {
        select: {
            title: 'date_created',
            media: 'hero_image',
        },
    },
})
