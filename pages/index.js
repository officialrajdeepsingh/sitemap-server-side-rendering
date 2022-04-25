import Link from 'next/link';
import posts from '../data';
import { getServerSideSitemap } from 'next-sitemap'

export default function Home({championData}) {
    return (
        <>
        <div style={{ padding: "3rem", margin: '5px auto', width:'724px',display:'flex'}} > 
        <Link href='/'>
            <a style={{ padding: "0.3rem", margin: '2px'}}> Home</a> 
        </Link>
        <Link href='/serve.xml'>
            <a style={{ padding: "0.3rem", margin: '2px'}}>Server-side sitemap</a> 
        </Link>
        <Link href='/sitemap.xml'>
            <a target='_blank' style={{ padding: "0.3rem", margin: '2px'}}>Static Site sitemap</a> 
        </Link>
        </div>
        <div style={{ padding: "3rem", margin: '5px auto', width:'724px'}}>
            <main>
                <ul>
                    {posts.map((item) => (
                        <li style={{ padding: "1.5px 0px", margin: '4px auto'}} key={item.slug}>
                            <Link href={`/post/${item.slug}`}>
                                <a>{item.frontmatter.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
        </>
    );
}

// This gets called every time the page is called
export async function getServerSideProps(ctx) {

  const { params } =    ctx

  const AllPosts = posts.map(
    item=> item  
  )



  // Pass data to the page via props
  return { props: { AllPosts } };
  
}