// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'yonsy78d', // you can find this in sanity.json
  dataset: 'mento', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-12-28'
})