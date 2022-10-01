import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { GlobalLayout } from '../layouts/GlobalLayout';
import { GlobalFeed } from '../pages/GlobalFeed';
import { ImageFeed } from '../pages/ImageFeed';
import { MusicFeed } from '../pages/MusicFeed';
import { NotFound } from '../pages/NotFound';
import { ImageVisualization } from '../pages/ImageVisualization';
import { Profile } from '../pages/Profile';
import { useLayout } from '../context/LayoutProvider/useLayout';
import { useEffect } from 'react';

export function Router() {
  const location = useLocation();

  const { handleChangePaddingActive } = useLayout();

  useEffect(() => {
    handleChangePaddingActive(true);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/image" element={<ImageFeed />} />
        <Route path="/image/post/:id" element={<ImageVisualization />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/music" element={<MusicFeed />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
