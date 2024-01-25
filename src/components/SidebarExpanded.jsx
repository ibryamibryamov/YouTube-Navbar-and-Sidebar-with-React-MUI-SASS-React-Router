import {
  AccessTime,
  AccountBoxOutlined,
  ArrowForwardIosOutlined,
  EmojiEventsOutlined,
  HistoryOutlined,
  Home,
  Menu,
  MusicNoteOutlined,
  SmartDisplayOutlined,
  SportsEsportsOutlined,
  SubscriptionsOutlined,
  ThumbUpOutlined,
  YouTube,
} from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarExpanded = ({ sidebarExpanded, setSidebarExpanded }) => {
  const toggleSidebar = () => {
    setSidebarExpanded((previousValue) => !previousValue);
  };
  return (
    <Drawer
      className="sidebar-expanded"
      open={sidebarExpanded}
      onClose={toggleSidebar}
    >
      <div className="content">
        <header>
          <button
            className="button button--close"
            onClick={() => {
              toggleSidebar();
            }}
          >
            <Menu />
          </button>
          <Link to="/">
            <img
              className="logo"
              src="https://iconape.com/wp-content/files/mt/383138/svg/383138.svg"
              alt="logo"
            />
          </Link>
        </header>
        <div className="links">
          <Link className="link">
            <Home className="icon" />
            <label className="label">Home</label>
          </Link>
          <Link className="link">
            <YouTube className="icon" />
            <label className="label">Shorts</label>
          </Link>
          <Link className="link">
            <SubscriptionsOutlined className="icon" />
            <label className="label">Subscribtions</label>
          </Link>
          <div className="divider"></div>
          <Link className="link link--main">
            <label className="label">You</label>
            <ArrowForwardIosOutlined className="icon" />
          </Link>
          <Link className="link">
            <AccountBoxOutlined className="icon" />
            <label className="label">Your Channel</label>
          </Link>
          <Link className="link">
            <HistoryOutlined className="icon" />
            <label className="label">History</label>
          </Link>
          <Link className="link">
            <SmartDisplayOutlined className="icon" />
            <label className="label">Your videos</label>
          </Link>
          <Link className="link">
            <AccessTime className="icon" />
            <label className="label">Watch later</label>
          </Link>
          <Link className="link">
            <ThumbUpOutlined className="icon" />
            <label className="label">Liked videos</label>
          </Link>
          <div className="divider"></div>
          <h3 className="heading">Inspiration</h3>
          <Link className="link">
            <MusicNoteOutlined className="icon" />
            <label className="label">Music</label>
          </Link>
          <Link className="link">
            <SportsEsportsOutlined className="icon" />
            <label className="label">Games</label>
          </Link>
          <Link className="link">
            <EmojiEventsOutlined className="icon" />
            <label className="label">Sports</label>
          </Link>
          <div className="divider"></div>
          <h3 className="heading">More from YouTube</h3>
          <Link className="link">
            <YouTube className="icon icon--youtube" />
            <label className="label">YouTube Premium</label>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default SidebarExpanded;
