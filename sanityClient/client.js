import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'r0enk9ci',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-07-08'
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);

