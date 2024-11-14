import React, { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-black w-screen h-full">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-5xl border border-white">{children}</div>
    </div>
  )
}

export default DashboardLayout
