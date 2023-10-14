import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (

      <div style={{display: "none"}}>
        
            <Link to="/">Home</Link>
         
            <Link to="/portfolio">Portfolio</Link>
          
      </div>

  )
}

export default Layout;