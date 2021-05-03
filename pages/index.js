import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from './components/date'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Me llamo Chihiro de Sento Chihiro no Kamikakushi!</p>
        <ul>
          <li>Spirited Away</li>
          <li>El viaje de Chihiro</li>
          <li><a href='https://ghibli.fandom.com/wiki/Spirited_Away' target="_blank" rel='noopener noreferrer'>千と千尋の神隠し</a></li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}