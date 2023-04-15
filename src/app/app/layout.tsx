import AppLayoutClient from './AppLayout';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return <AppLayoutClient>{children}</AppLayoutClient>;
};
export default AppLayout;
