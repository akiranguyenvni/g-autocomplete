import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import CountrySelect from './autocomplete'
import GoogleMaps from './autocomplete2'
import Asynchronous from './autocomplete3'

const introduction = "Please try Autocomplete below"
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{introduction} <ArrowDownwardIcon /></p>
        <CountrySelect />
        <GoogleMaps />
        <Asynchronous />
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
