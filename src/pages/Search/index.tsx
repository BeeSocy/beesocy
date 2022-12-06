import { Component } from '../../components/Search/Component';
import { Content } from './styles';

export function Search() {
  return (
    <Content>
      <Component highlight title="best" />
      <Component title="profile" />
      <Component title="image" />
      <Component title="music" />
    </Content>
  );
}
