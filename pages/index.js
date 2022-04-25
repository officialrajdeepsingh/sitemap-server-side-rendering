import Link from 'next/link';
import posts from '../data';
import { getServerSideSitemap } from 'next-sitemap'

export default function Home({championData}) {
    return (
        <div style={{padding: "3rem"}}>
            <main>
                <ul>
                    {posts.map((item) => (
                        <li key={item.slug}>
                            <Link href={`/post/${item.slug}`}>
                                <a>{item.frontmatter.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
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