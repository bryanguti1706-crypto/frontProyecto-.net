import AppNavbar from '../components/Navbar/AppNavbar'

function MainLayout({ children, container = true }) {
  return (
    <>
      <AppNavbar />

      {container ? (
        <main className="container py-4">{children}</main>
      ) : (
        <main>{children}</main>
      )}
    </>
  )
}

export default MainLayout