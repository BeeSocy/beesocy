import { Component } from '../../components/Search/Component';
import { Content } from './styles';

export function Search() {
  return (
    <Content>
      <Component title="best" />
      <Component title="profile" />
      <Component title="code" />
      <Component title="image" />
      <Component title="music" />
    </Content>
  );
}
