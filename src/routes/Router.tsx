import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalLayout } from '../layouts/GlobalLayout';
import { GlobalFeed } from '../pages/GlobalFeed';
import { ImageFeed } from '../pages/ImageFeed';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/image" element={<ImageFeed />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Route>
    </Routes>
  );
}
