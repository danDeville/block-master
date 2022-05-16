// Base
import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth"

// Pages
import Auth from "../pages/Auth"
import DashboardRouter from "./DashboardRouter"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

// Components
import { CircularProgress } from "@mui/material"

const AppRouter = () => {
  const [checkIn, setCheckIn] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }

      setCheckIn(false)
    })
  }, [setCheckIn, setIsLogin])

  if(checkIn) {
    return (
      <div
        className="
          flex items-center justify-center
          w-screen h-screen bg-background
        "
      >
        <CircularProgress />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes isAuth={isLogin}>
            <Auth />
          </PublicRoutes>
        }/>

        <Route path="/*" element={
          <PrivateRoutes isAuth={isLogin}>
            <DashboardRouter />
          </PrivateRoutes>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

