import { Box } from '@mui/material';
type Props = {
  children: React.ReactNode;
};
const ContentDisplayView = (props: Props) => {
  const { children } = props;
  return <Box className="grid grid-cols-2 gap-2">{children}</Box>;
};
export default ContentDisplayView;
