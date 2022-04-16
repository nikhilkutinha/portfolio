import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <SectionContainer>
        <Navbar />
        <main className="mb-auto min-h-[100vh-88px]">{children}</main>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
