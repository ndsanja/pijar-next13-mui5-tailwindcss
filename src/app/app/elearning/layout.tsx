import ElearningLayoutClient from './ElearningLayout';

type Props = {
  children: React.ReactNode;
};

const ElearningLayout = ({ children }: Props) => {
  return <ElearningLayoutClient>{children}</ElearningLayoutClient>;
};
export default ElearningLayout;
