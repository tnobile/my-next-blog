import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../components/layout"

const FirstPost = () => {
    return (
        <Layout>
        <Head>
            <title>Chihiro's Post</title>
        </Head>
            <h1>Fist Post</h1>
            <h2>
                <Link href='/'>
                    <a>Back home</a>
                </Link>
            </h2>
            <h3>
                <a href='http://news.google.co.jp'>news</a>
            </h3>
            <img src='/images/profile.jpg' alt="chihiro" width='400px'/>
            {' '}
            <Image src='/images/profile.jpg' alt="chihiro" width={400} height={216}/>
            {' '}
            <img src='/images/profile.jpg' alt="chihiro" width='400px'/>
        </Layout>
    )
};

export default FirstPost;