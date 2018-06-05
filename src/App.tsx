import * as React from 'react';
import './App.css';
import LinkCard, { LinkCardProps } from './CardContainer/LinkCard';
import * as reactImg from './CardContainer/LinkCard/__tests__/react-hexagon-dim.png';
// import { testProps } from './LinkCard/__tests__/LinkCard.spec';

const testProps: LinkCardProps = {
  imageSrc: reactImg,
  title: 'React - A Love Story',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' + 
  'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' + 
  'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
  'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
  'remaining essentially unchanged.',
  tags: ['JavaScript', 'React', 'WebDev'],
};

class App extends React.Component {
  render() {
    return (
      <LinkCard {...testProps} />
    );
  }
}

export default App;
