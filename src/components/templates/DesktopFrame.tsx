import Footer from '@components/shared/Footer'
import Header from '@components/shared/Header'
import React from 'react'

type DesktopFrameProps = {
  children: React.ReactNode
}

const DesktopFrame = (props: DesktopFrameProps) => {
  const { children } = props

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="main flex-1">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default DesktopFrame
