import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import MainDashboard from './pages/MainDashboard';
import StudentVerification from './pages/StudentVerification';
import FacultyRecord from './pages/FacultyRecord';
import StudentRecord from './pages/StudentRecord';
import HostelRecord from './pages/HostelRecord';
import IndividualStudentRecord from './pages/IndividualStudentRecord';
import Toast from '../../components/ui/Toast';

const AdminDashboard = () => (
  <>
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />}>
        {/* This route renders for /admin/dashboard and shows MainDashboard */}
        <Route index element={<MainDashboard />} />
        {/* Admin features (all relative, no leading slash) */}
        <Route path="student-verification" element={<StudentVerification />} />
        <Route path="faculty-record" element={<FacultyRecord />} />
        <Route path="student-record" element={<StudentRecord />} />
        <Route path="hostel-record" element={<HostelRecord />} />
        <Route path="individual-student/:id" element={<IndividualStudentRecord />} />
        {/* Any undefined route in /admin/dashboard/ goes to MainDashboard */}
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
    </Routes>
    <Toast />
  </>
);

export default AdminDashboard;
