import "../styles/TopBar.css";

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="path">
          <div className="panel">
            <div className="three"></div>
            <div className="one"></div>
          </div>
          <div className="path-display">
            <span>Workspace</span>
            <span>&gt;</span>
            <span>Folder 2</span>
            <span>&gt;</span>
            <div className="current-dots">
              <span className="current">Spreadsheeet 3</span>
              <span className="three-dots">...</span>
            </div>
          </div>
        </div>
        <div className="actions-right">
          <div className="search">
            <img src="/Images/search.png" alt="search" />
            <input type="text" placeholder="Search within sheet" />
          </div>
          <div className="bell">
            <span class="badge">2</span>
            <img
              src="/Images/bell.png"
              className="bell-icon"
              alt="Notification Bell"
            />
          </div>
          <div className="profile-block">
            <div className="profile-img">
              <img src="/Images/profile_pic.png" alt="Profile Pic" />
            </div>
            <div className="user-details">
              <p className="name">John Doe</p>
              <p className="username">john.doe@companyname.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
