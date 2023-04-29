import AppLayoutClient from './AppLayout';
import AppPageClient from './AppPage';

const AppPage = () => {
  return (
    <AppLayoutClient>
      <AppPageClient />
    </AppLayoutClient>
  );
};
export default AppPage;
