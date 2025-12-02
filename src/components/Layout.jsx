import Sidebar from './Sidebar';
import Player from './Player';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Layout;