import Link from 'next/link'
import { useRouter } from 'next/router';


import posts from '../../data';



const SinglePost = ({ post }) => {
    const router = useRouter();
    if (!posts) {
        return <h1>posts does not exist.</h1>;
    }
    console.log(post.frontmatter.images[0],' post.frontmatter.images[0]  ')
    return (
        <>
        <div style={{ padding: "3rem", margin: '5px auto', width:'724px'}} > 
        <Link href='/'>
            <a> Home</a> 
        </Link>
        </div>
        <div style={{ padding: "3rem", margin: '5px auto', width:'724px'}}>
            <h1>{post.frontmatter.title}</h1>
            <div style={{'display' :'flex'}}> 
            {
                post.frontmatter.tags.map(
                    tag=> <h5 style={{'margin' :'8px 4px'}} key={tag}> {tag} </h5>
                )
            }
            </div>
           
            <p>{post.frontmatter.description}</p>
            <h5>Last updated at: {post.frontmatter.date}</h5>

            <img width={'724px'} src={`${process.env.SITE_URL}/${post.frontmatter.images[0]}`} alt={post.frontmatter.title} />
       
        
        </div>
        </>
    );
};
export default SinglePost



// This gets called every time the page is called
export async function getServerSideProps({ params }) {

    const post = posts.find((item) => item.slug === params.slug);

    // Pass data to the page via props
    return { props: { post } };
}



