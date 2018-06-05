import * as React from 'react';
import './link-card-styles.css';
import CardFooter from './CardFooter';

export interface LinkCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: Array<string>;
}

export default class LinkCard extends React.Component<LinkCardProps, {}> {
  render() {
    return (
      <article className="card-container">
        <section className="card-image-container">
          <img className="card-image" src={this.props.imageSrc} />
        </section>
        <section className="card-text-container">
          <section className="card-link-title">
            {this.props.title}
          </section>
          <section className="card-link-description">
            {this.props.description}
          </section>
          <hr />
          <CardFooter tags={this.props.tags} />
        </section>
      </article>
    );
  }
}
