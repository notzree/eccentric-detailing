
import {createClient} from '@sanity/client'
 const client = createClient({
    projectId: 'r0enk9ci',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-03-02'
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
export default{
    name: 'Image',
    title: 'Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image Title',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }, 
        },
        {
            name: 'car_model',
            title: 'car model WRITE IN THIS FORMAT: Year Brand Model (ex: 2021 Toyota Camry)',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order start from 0, if you want this picture to go first make the order lower. Negative numbers are allowed ',
            type: 'number',
            initialValue: 0,
        },

    ]
}
