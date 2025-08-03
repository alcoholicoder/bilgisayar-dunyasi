import React, { Children } from 'react'

const AdminLayout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (

    <div>
        AdminLayout
        {children}
    </div>

  )
}

export default AdminLayout