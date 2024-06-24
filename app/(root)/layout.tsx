import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>Navbar{children} footer</main>
}

export default RootLayout
