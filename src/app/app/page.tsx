import { Suspense } from 'react';
import AppPageClient from './AppPage';
import AppLoading from './loading';

const AppPage = () => {
  return (
    <Suspense fallback={<AppLoading />}>
      <AppPageClient />
    </Suspense>
  );
};
export default AppPage;
