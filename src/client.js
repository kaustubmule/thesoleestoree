import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: 'ddtv7fvr',
    dataset: 'production',
    useCdn: true
});