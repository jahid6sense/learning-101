import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  console.log('in local');

  return (
    <div>
      Working now {process.env.customKey}
    </div>
  )
}

export default Home
