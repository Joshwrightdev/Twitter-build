import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* TWITTER ICON */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* SIDEBAR 1 */}
      {/* SIDEBAR 2 */}
      <SidebarOption active Icon={HomeIcon} text="home" />
      <SidebarOption Icon={SearchIcon} text="explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="lists" />
      <SidebarOption Icon={PermIdentityIcon} text="profile" />
      <SidebarOption Icon={MoreHorizIcon} text="more" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        TWEET
      </Button>
    </div>
  );
}

export default Sidebar;
