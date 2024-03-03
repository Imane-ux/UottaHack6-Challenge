import React from 'react';
import './SideBar.css'; // Import the sidebar CSS file

const Sidebar = () => {
  return (
    <div className="custom-sidebar">
      <div className="bg-light border-right" id="sidebar">
      <div className="sidebar-heading">#SEG 😍</div>
        <div className="list-group list-group-flush">
          <button className="list-group-item list-group-item-action bg-light" type="button" data-toggle="collapse" data-target="#directMessagesCollapse" aria-expanded="false" aria-controls="directMessagesCollapse">
            <strong>Direct Messages</strong>
          </button>
          <div className="collapse" id="directMessagesCollapse">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">@maryam😎</a>
              <a href="#" className="list-group-item list-group-item-action">@imane🥰</a>
              <a href="#" className="list-group-item list-group-item-action">@sophia💗</a>
            </div>
          </div>
          <button className="list-group-item list-group-item-action bg-light" type="button" data-toggle="collapse" data-target="#channelsCollapse" aria-expanded="false" aria-controls="channelsCollapse">
            <strong>Channels</strong>
          </button>
          <div className="collapse" id="channelsCollapse">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">#SEG🖥</a>
              <a href="#" className="list-group-item list-group-item-action">#CSI👾</a>
              <a href="#" className="list-group-item list-group-item-action">#BIO🧬</a>
            </div>
          </div>
          <button className="list-group-item list-group-item-action bg-light" type="button" data-toggle="collapse" data-target="#studyRoomsCollapse" aria-expanded="false" aria-controls="studyRoomsCollapse">
            <strong>Study Rooms</strong>
          </button>
          <div className="collapse" id="studyRoomsCollapse">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">Study Room 1👩‍💻</a>
              <a href="#" className="list-group-item list-group-item-action">Study Room 2👩‍💻</a>
              <a href="#" className="list-group-item list-group-item-action">Study Room 3👩‍💻</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
