import BottomNavigationComp from './components/BottomNavigation';

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      {children}
      <BottomNavigationComp />
    </>
  );
};
export default AppLayout;
