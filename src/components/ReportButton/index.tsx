import { useEffect, useState } from 'react';
import { MdOutlineFlag, MdFlag } from 'react-icons/md';

import { Container } from './styles';

export interface IReportButton {
  isReported?: boolean;
  postId?: number;
}

export function ReportButton({ postId, isReported }: IReportButton) {
  const [isReportedState, setIsReportedState] = useState(false);

  function handleReport() {
    //backend
    setIsReportedState(state => !state);
  }

  useEffect(() => {
    setIsReportedState(isReported ?? false);
  }, []);

  return (
    <Container
      full={false}
      rounded
      isReported={isReportedState}
      onClick={handleReport}
      aria-label="Denunciar"
      title="Denunciar"
      aria-checked={isReportedState}
    >
      {isReportedState ? <MdFlag /> : <MdOutlineFlag />}
    </Container>
  );
}
