import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalLayout } from '../layouts/GlobalLayout';
import { GlobalFeed } from '../pages/GlobalFeed/GlobalFeed';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/home" element={<GlobalFeed />} />
        <Route path="/global" element={<GlobalFeed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
