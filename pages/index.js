import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GAutocomplete from './autocomplete'

const introduction = "Please try Autocomplete below"
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{introduction} <ArrowDownwardIcon /></p>
        <GAutocomplete />
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
