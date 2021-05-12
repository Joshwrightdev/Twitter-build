import React from "react";
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/d6/cb/c6/d6cbc6849fe48a0f9d7a0778502d14b5.png" />
          <input placeholder="Whats happening?" type="text" />
          {/* <input placeholder="Post an Image...Enter Url" type="text" /> */}
        </div>
        <Button className="tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
