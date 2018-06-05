import * as React from 'react';
import './social-card.css';

interface CardHeaderProps {
  org: string;
  orgTag: string;
  date: Date;
  orgDesc: string;
  authorTag: string;
}

interface CardDescriptionProps {
  title: string;
  description: string;
  link: string;
}

interface CardBodyProps {
  header: CardHeaderProps;
  imageURL: string;
  description: CardDescriptionProps;
}

const Body = (props: CardBodyProps) => (
  <div className="body-container">
    <div className="body-header">
      {props.header.authorTag}
      {props.header.date.toISOString()}
      {props.header.org}
      {props.header.orgDesc}
      {props.header.orgTag}
    </div>
    <div className="body-image">
      {props.imageURL}
    </div>
    <div className="body-description">
      {props.description.title}
      {props.description.description}
      {props.description.link}
    </div>
    <div className="body-footer">
      test footer
    </div>
  </div>
);

export default class SocialCard extends React.Component {
  render() {
    const headerProps: CardHeaderProps = {
      org: 'CodeSESH',
      orgTag: '@codeSESH',
      orgDesc: 'da best',
      date: new Date(),
      authorTag: 'me',
    };

    const descProps: CardDescriptionProps = {
      description: 'test',
      title: 'title',
      link: 'google',
    };

    const props: CardBodyProps = {
      header: headerProps,
      imageURL: 'google',
      description: descProps,
    };

    return (
      <div className="card-container">
        <div className="avatar-container">
          avatar
        </div>
        <Body {...props} />
      </div>
    );
  }
}
