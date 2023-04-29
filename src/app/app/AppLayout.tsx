'use client';

import { Slide, useScrollTrigger } from '@mui/material';
import AppAppBar from './components/AppAppBar';
type Props = { children: React.ReactNode };

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const AppLayoutClient = (props: Props) => {
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <AppAppBar />
      {/* </HideOnScroll> */}

      <div className="w-full max-w-[1400px] mx-auto pb-[68px]">
        {props.children}
      </div>
    </>
  );
};

export default AppLayoutClient;
