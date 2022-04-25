import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed
          tweetId={
            'https://twitter.com/gocometin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
          }
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="gocometin"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://www.gocomet.com/'}
          options={{ text: '#reactjs is awesome', via: 'Hardik' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
