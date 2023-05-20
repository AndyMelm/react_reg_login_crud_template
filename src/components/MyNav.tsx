import { Outlet, Link } from "react-router-dom";

const MyNav = () => {

    const logout=()=>{
        localStorage.clear()
    }


  return (
    <div>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>|{" "}
        <Link to="/login">Login</Link>|{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/admin">Admin</Link>|{" "}
        <a href="" onClick={()=>logout()}>Logout</a>|{" "}
        <Link to="/register">Register</Link>
       
    </div>
  )
}
export default MyNav
