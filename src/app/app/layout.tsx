import AppLayoutClient from './AppLayout';

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <AppLayoutClient>
      <div className="w-full max-w-[1400px] mx-auto pb-[68px]">{children}</div>
    </AppLayoutClient>
  );
};
export default AppLayout;
