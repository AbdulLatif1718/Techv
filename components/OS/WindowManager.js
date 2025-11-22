import { useSelector } from 'react-redux';
import Window from './Window';
import HomeWindow from './windows/HomeWindow';
import AboutWindow from './windows/AboutWindow';
import VenturesWindow from './windows/VenturesWindow';
import TeamWindow from './windows/TeamWindow';
import ContactWindow from './windows/ContactWindow';
import TerminalWindow from './windows/TerminalWindow';

const WindowManager = () => {
  const windows = useSelector((state) => state.windows.windows);

  const renderWindowContent = (window) => {
    switch (window.type) {
      case 'home':
        return <HomeWindow />;
      case 'about':
        return <AboutWindow />;
      case 'ventures':
        return <VenturesWindow />;
      case 'team':
        return <TeamWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'terminal':
        return <TerminalWindow />;
      default:
        return <div>Unknown window type</div>;
    }
  };

  return (
    <>
      {Object.values(windows)
        .filter((window) => !window.minimized)
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.type.charAt(0).toUpperCase() + window.type.slice(1)}
            position={window.position}
            size={window.size}
            maximized={window.maximized}
            zIndex={window.zIndex}
          >
            {renderWindowContent(window)}
          </Window>
        ))}
    </>
  );
};

export default WindowManager;

