'use client';
import { Slide, useScrollTrigger } from '@mui/material';

type Props = {
  children: React.ReactElement;
};

const HideOnScrool = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
export default HideOnScrool;
