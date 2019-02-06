/* @flow */
import './Navigation.css';
import NavigationItem from './NavigationItem';
import React from 'react';
import { Subreddit } from './types';
import memo from 'memoize-one';

type Props = {
  activeUrl: ?string;
  items: Array<Subreddit>;
  itemSelected: (item: Subreddit) => void;
}

export default class Navigation extends React.Component<Props> {
  setSelectedItem = (item: Subreddit) => {
    this.props.itemSelected(item);
  };

  sortedItems = memo((items: Array<Subreddit>) => {
    const sortedItems: Array<Subreddit> = items.slice().sort(
      (a, b) =>
        // Sort by # of subscribers in descending order
        b.data.subscribers - a.data.subscribers
    );
    return sortedItems;
  })

  render() {
    return (
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
          {this.sortedItems(this.props.items).map(item => (
            <NavigationItem
              item={item}
              itemSelected={this.setSelectedItem}
              key={item.data.id}
              selected={item.data.url === this.props.activeUrl}
            />
          ))}
        </ul>
      </div>
    );
  }
}
