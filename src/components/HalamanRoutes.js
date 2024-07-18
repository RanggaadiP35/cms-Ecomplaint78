import RouteUrl from '../routes'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Tables from '../views/base/tables/Tables';
import EditComplaint from '../views/base/tables/EditComplaint';

const HalamanRoutes = () => {
    const authState = useSelector((state) => state.auth);
    const isAuthenticated = authState ? authState.isAuthenticated : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <DefaultLayout>
      {/* Tambahkan rute Anda di sini dalam DefaultLayout */}
      {/* Contoh: */}
      <Route exact path="/pengaduan" name="Halaman Pengaduan" element={<Tables />} />
      <Route exact path="/edit/:id" name="EditComplaint" element={<EditComplaint />} />
      
      {RouteUrl.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </DefaultLayout>
  )
}

export default HalamanRoutes;
