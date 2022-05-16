// Base
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from "../pages/Home"
import LessValue from '../pages/LessValue'
import MoreValue from '../pages/MoreValue'
import Detail from '../pages/Detail'

// Containers
import Layout from '../containers/Layout'

const DashboardRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/more-value" element={<MoreValue />}/>
        <Route path="/less-value" element={<LessValue/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </Layout>
  )
}

export default DashboardRouter