import { useRouter } from 'next/router';
import champions from '../../data';


// This gets called at build time
export async function getStaticProps({ params }) {

    const championData = champions.find((item) => item.slug === params.id);

    // Pass data to the page via props
    return { props: { championData, timestamp: (new Date()).toUTCString() } };
}

// This gets called at build time
export async function getStaticPaths() {
    // Get the paths we want to pre-render
    const paths = champions.map((champ) => ({
        params: { id: champ.slug },
    }))

    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
}

const Champion = ({ championData, timestamp }) => {
    const router = useRouter();
    if (!championData) {
        return <h1>Champion does not exist.</h1>;
    }
    return (
        <div>
            <h1>{championData.title}</h1>
            <p>{championData.description}</p>
            <h5>Last updated at: {timestamp}</h5>
        </div>
    );
};
export default Champion;