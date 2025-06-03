import { Navigate } from "react-router-dom";

function PrivateVendorRoute ({children}) {
    const token = localStorage.getItem("vendor_token")
    return token ? children : <Navigate to="/vendor/login" />

}
export default PrivateVendorRoute;