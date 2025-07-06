type UrlStuff = {params: Promise<{
    slug: string
}>}
// look into the slug
// https://nextjs.org/docs/app/getting-started/layouts-and-pages
const PreviousActivityPage:React.FC<UrlStuff> = async ({params}) => {
    const { slug } = await params
    console.log('slug', slug)
    // fetch the query with 

    return (
        <div>
            HELLOOOOOO
        </div>
    )
}

export default PreviousActivityPage

// export default async function BlogPostPage({
//   params
// } : {
//   params: Promise<{ slug: string }>
// }) 

// {
//   const { slug } = await params
// //   const post = await getPost(slug)
 
//   return (
//     <div>
//         {slug}
//     </div>
//   )
// }