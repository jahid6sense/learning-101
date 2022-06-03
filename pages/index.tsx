import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  console.log('in local log');
  console.error('in local error');
  console.warn('in local warn');
  console.info('in local info');
  console.debug('in local debug');

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
