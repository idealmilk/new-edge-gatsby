import React from 'react';
import { Container, Overlay } from './styled';

type LoaderProps = {
  showLoader: any;
};

const Loader = ({ showLoader }: LoaderProps) => {
  if (showLoader) {
    return (
      <Container id='loader'>
        <Overlay>
          <div className='loading'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Overlay>
      </Container>
    );
  } else return <></>;
};

export default Loader;
