import { Suspense } from 'react';
import AppLayoutClient from './AppLayout';
import AppPageClient from './AppPage';
import AppLoading from './loading';

const AppPage = () => {
  return (
    <Suspense fallback={<AppLoading />}>
      <AppLayoutClient>
        <AppPageClient />
      </AppLayoutClient>
    </Suspense>
  );
};
export default AppPage;
