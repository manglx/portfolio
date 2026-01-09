import * as React from 'react'
import './src/styles/global.css'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
