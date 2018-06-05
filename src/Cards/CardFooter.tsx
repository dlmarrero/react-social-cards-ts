import * as React from 'react';

export interface CardFooterProps {
  tags: Array<string>;
}

export default class CardFooter extends React.Component<CardFooterProps, {}> {
  render() {
    return (
      <section className="card-footer">
        <section className="card-footer-tags">
          {/* TODO: view all truncated tags */}
          <i className="fa fa-tag" style={{ fontSize: '16px' }} />
          {this.props.tags
            .map(tag => <a key={tag} className="card-tag" href="javascript:void(0)">{tag}</a>)
            // tslint:disable-next-line:no-any
            .reduce((prevTag, nextTag, i): any => [prevTag, ', ', nextTag])}
        </section>
        <section className="card-footer-actions">
          <a className="card-action" href="javascript:void(0)"><i className="fa fa-heart" /></a>
          <a className="card-action" href="javascript:void(0)"><i className="fa fa-comments" /></a>
          <a className="card-action" href="javascript:void(0)"><i className="fa fa-ellipsis-h" /></a>
        </section>
      </section>
    );
  }
}
