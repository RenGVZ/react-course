import React, { Component } from 'react';

import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    const { gifIdList } = this.props;
    return (
      <div className="gif-list">
        { gifIdList.map(aGifId => <Gif gifId={aGifId} />)}
        ;
      </div>
    );
  }
}

export default GifList;