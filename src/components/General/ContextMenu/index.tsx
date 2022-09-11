import { ReactNode, useState } from 'react';
import { ContextContainer } from './styles';

interface IContextMenuProps {
  children: ReactNode;
  content: ReactNode;
}

export function ContextMenu({ children, content }: IContextMenuProps) {
  const [active, setActive] = useState<boolean>(false);
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState<number>(0);

  return (
    <>
      <div
        onContextMenu={event => {
          event.preventDefault();
          setXPosition(event.pageX);
          setYPosition(event.pageY);
          setActive(true);
        }}
      >
        {children}
      </div>

      {active && (
        <ContextContainer $xPosition={xPosition} $yPosition={yPosition}>
          {content}
        </ContextContainer>
      )}
    </>
  );
}
