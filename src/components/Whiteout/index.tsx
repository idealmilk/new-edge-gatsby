import { Container, Overlay } from './styled';

type WhiteoutProps = {
  showWhiteout: any;
};

const Whiteout = ({ showWhiteout }: WhiteoutProps) => {
  return (
    <Container id='whiteout'>
      {showWhiteout && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='row'>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
          </div>
        </Overlay>
      )}
    </Container>
  );
};

export default Whiteout;
