import { useState } from 'react';
import { MdOutlineFlag, MdFlag } from 'react-icons/md';

import { Container } from './styles';

export interface IReportButton {
  isReported?: boolean;
  postId?: number;
}

export function ReportButton({ postId }: IReportButton) {
  const [isReported, setIsReported] = useState(false);

  function handleReport() {
    //backend
    setIsReported(state => !state);
  }

  return (
    <Container
      full={false}
      rounded
      isReported={isReported}
      onClick={handleReport}
      aria-label="Denunciar"
      title="Denunciar"
      aria-checked={isReported}
    >
      {isReported ? <MdFlag /> : <MdOutlineFlag />}
    </Container>
  );
}
