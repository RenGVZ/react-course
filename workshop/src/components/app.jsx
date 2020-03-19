// import React from 'react';

// const App = () => {
//   return <div> Hello Sam! </div>;
// };

// export default App;

import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const selectedGifId = "WuGSL4LFUMQU";
    const aGifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={aGifList} />
        </div>
      </div>
    );
  }
}
