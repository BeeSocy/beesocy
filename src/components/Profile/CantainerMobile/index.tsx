import {
  ContainerFollow,
  ContainerProfile,
  Content,
  ContentProfile,
  Format,
  NameProfile,
  TitleName
} from './styles';
import { user } from '../../../pages/Profile';
import { IconProfile } from '../IconProfile';
import { Img } from './styles';
import { SendMensagem } from '../SendMensagem';
import { ButtonFollow } from '../ButtonFollow';
import { MdVerified } from 'react-icons/md';
import { InfoProfile } from '../InforProfile';
import { ContentSocial } from '../../General/ContentSocial';

export function BannerMobile() {
  return (
    <>
      <Content>
        <ContentProfile>
          <IconProfile color={user.color} />
        </ContentProfile>
        <Img src={user.bannerUrl} />
      </Content>

      <ContainerProfile>
        <TitleName color={user.color}>{user.name}</TitleName>
      </ContainerProfile>
      <Format>
        <NameProfile>
          <span>@minhapika {user.verified && <MdVerified size={20} />}</span>
        </NameProfile>
        <ContainerFollow>
          <ButtonFollow></ButtonFollow>
          <SendMensagem></SendMensagem>
        </ContainerFollow>

        <InfoProfile />
        <ContentSocial />
      </Format>
    </>
  );
}
