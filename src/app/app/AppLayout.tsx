'use client';

import AppAppBar from './components/AppAppBar';
import { usePathname } from 'next/navigation';
import BottomNavigationComp from './components/BottomNavigation';

type Props = {
  children: React.ReactNode;
};
const AppLayoutClient = (props: Props) => {
  const { children } = props;
  const path = usePathname();

  return (
    <>
      {(path === '/app' || path === '/app/elearning') && <AppAppBar />}

      {children}
      <BottomNavigationComp />
    </>
  );
};

export default AppLayoutClient;
