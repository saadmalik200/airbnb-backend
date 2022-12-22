import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../../context/Context";

function AdminLayout() {
  const { state } = useContext(Context);

  if (state.user._id) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/home/login" />;
  }
}

export default AdminLayout;
