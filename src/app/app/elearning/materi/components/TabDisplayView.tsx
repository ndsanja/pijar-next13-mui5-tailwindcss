import { Box } from '@mui/material';
type Props = {
  children: React.ReactNode;
};
const TabDisplayView = (props: Props) => {
  const { children } = props;
  return <Box className="w-full">{children}</Box>;
};
export default TabDisplayView;
