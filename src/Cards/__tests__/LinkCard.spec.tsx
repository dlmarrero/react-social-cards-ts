import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LinkCard from '../LinkCard';
import { LinkCardProps } from '../LinkCard';
import * as reactImg from './react-hexagon-dim.png';

const testProps: LinkCardProps = {
  imageSrc: reactImg,
  title: 'React - A Love Story',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' + 
  'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' + 
  'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' + 
  'It has survived not only five centuries, but also the leap into electronic typesetting,' + 
  'remaining essentially unchanged.',
  tags: ['JavaScript', 'React'],
};

describe('rendering', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<LinkCard {...testProps} />);
  });

  it('should render article with class "card-container"', () => {
    expect(wrapper.find('article.card-container')).toHaveLength(1);
  });

  describe('card image container', () => {
    it('should render a section with class "card-image-container"', () => {
      expect(wrapper.find('section.card-image-container')).toHaveLength(1);
    });

    it('should contain an img tag with class "card-image"', () => {
      expect(wrapper.find('img.card-image')).toHaveLength(1);
    });
  });

  describe('card text container', () => {
    let textWrapper: ShallowWrapper;
    beforeEach(() => {
      textWrapper = wrapper.find('section.card-text-container');
    });

    describe('title section', () => {
      it('should render a section with class "card-link-title"', () => {
        expect(textWrapper.find('section.card-link-title')).toHaveLength(1);
      });

      it('should contain the link title', () => {
        expect(textWrapper.find('section.card-link-title').text()).toBe(testProps.title);
      });
    });

    describe('description section', () => {
      let descWrapper: ShallowWrapper;
      beforeEach(() => {
        descWrapper = textWrapper.find('section.card-link-description');
      });

      it('should contain the link description', () => {
        expect(descWrapper.text()).toBe(testProps.description);
      });
    });

    describe('footer section', () => {
      let footWrapper: ShallowWrapper;
      beforeEach(() => {
        footWrapper = textWrapper.find('section.card-footer');
      });

      it('should render section with class "section.card-footer"', () => {
        expect(textWrapper.find('section.card-footer')).toHaveLength(1);
      });

      describe('link tags', () => {
        let tagsWrapper: ShallowWrapper;
        beforeEach(() => {
          tagsWrapper = footWrapper.find('section.card-footer-tags');
        });

        it('should render a section with class "card-footer-tags"', () => {
          expect(footWrapper.find('section.card-footer-tags')).toHaveLength(1);
        });

        it('should list the link\'s tags', () => {
          expect(tagsWrapper.text()).toBe(testProps.tags.join(', '));
        });

        it('should render an <a> element for each link tag', () => {
          expect(tagsWrapper.find('a')).toHaveLength(testProps.tags.length);
        });
        
        describe('a tag link', () => {
          it('should call onClick function with tag name as parameter');
        });
      });

      describe('actions section', () => {
        let actionsWrapper: ShallowWrapper;
        beforeEach(() => {
          actionsWrapper = footWrapper.find('section.card-footer-actions');
        });

        it('should render with class "card-footer-actions"', () => {
          expect(footWrapper.find('section.card-footer-actions')).toHaveLength(1);
        });

        it('should contain three <a> elements', () => {
          expect(actionsWrapper.find('a')).toHaveLength(3);
        });
        
        describe('heart link', () => {
          it('should call onClick function with post ID as argument');
        });

        describe('comment link', () => {
          it('should call onClick function with post ID as argument');
        });

        describe('more link', () => {
          it('should call onClick function with post ID as a parameter');
        });
      });
    });
  });
});