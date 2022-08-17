import Head from "next/head";
import Link from "next/link";
import Component from "../components/Components";
const index = ({data}) => {
    return (
        <div>
            <Head>
                <title>Home | Learn Next.js</title>
                <meta name="keywords" content="Next.js, javascript, react ....." />
            </Head>
            <Link href="/about">
                <a className="about">Go to about page</a>
            </Link>
            <Component />
            <style jsx>
                {
                    `
                        .about{color:yellow}
                    `
                }
            </style>
            {
                data.map(todo => <h2>{todo.title}</h2>)
            }
        </div>
    );
}
 
export default index;

export async function getStaticProps(){
    const req = await fetch("https:/jsonplaceholder.typicode.com/todos");
    const data = await req.json();
    return {
        props:{data}
    }
}