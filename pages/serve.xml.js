import Link from 'next/link';
import posts from '../data';
import { getServerSideSitemap } from 'next-sitemap'

export default function Home() {}


export async function getServerSideProps(ctx) {

  const { params } =    ctx

  const allPosts = posts.map(
    post=> {
      const xmlData =  post.frontmatter
    
      return {
        author: xmlData.author,
        date: xmlData.date,
        description: xmlData.description,
        images: `${process.env.SITE_URL}/${xmlData.images[0]}`,
        tags: xmlData.tags,
        title: xmlData.title
      }
      
    } 
  )

  return  await  getServerSideSitemap(ctx, allPosts)
}