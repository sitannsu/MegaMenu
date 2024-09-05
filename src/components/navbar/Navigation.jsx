import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import UserProfile from "../userprofile/UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import Container from "../container/Container";
// import SearchBar from "./searchbar";
import assets from "../../assets";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={"/"}>
            <img src={assets.images.logo} />
          </Link>
          {/* <SearchBar /> */}

          <UserProfile />
        </div>
        <div className="toolbar">
          <div className="hidden md:block">
            <MegaMenu />
          </div>
          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
