import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  console.log('in local');

  return (
    <div>
      <div>
        Working now (^.^)
      </div>
      <div>
        Value: {process.env.customKey}
      </div>
      <div>
        Check console: I am in {process.env.HOST}
      </div>
    </div>
  )
}

export default Home
