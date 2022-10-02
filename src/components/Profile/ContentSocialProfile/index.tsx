import { useState } from 'react';
import { user } from '../../../pages/Profile';
import { BreadCrump, Content, Header, Margin } from './styles';

export function ContentSocialProfile() {
  const [breadCrumpActive, setBreadCrumpActive] = useState(0);

  return (
    <Content>
      <Margin>
        <Header>
          <BreadCrump
            color={user.color}
            onClick={() => {
              setBreadCrumpActive(0);
            }}
            active={breadCrumpActive === 0}
          >
            Músicas
          </BreadCrump>
          <BreadCrump
            color={user.color}
            onClick={() => {
              setBreadCrumpActive(1);
            }}
            active={breadCrumpActive === 1}
          >
            Códigos
          </BreadCrump>
          <BreadCrump
            color={user.color}
            onClick={() => {
              setBreadCrumpActive(2);
            }}
            active={breadCrumpActive === 2}
          >
            Imagens
          </BreadCrump>
        </Header>
      </Margin>
    </Content>
  );
}
