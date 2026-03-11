import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeWindow } from '../../features/windows/windowSlice';
import Window from './Window';
import HomeWindow from './windows/HomeWindow';
import AboutWindow from './windows/AboutWindow';
import VenturesWindow from './windows/VenturesWindow';
import TeamWindow from './windows/TeamWindow';
import ContactWindow from './windows/ContactWindow';
import InfrastructureWindow from './windows/InfrastructureWindow';
import PlatformsWindow from './windows/PlatformsWindow';
import EcosystemWindow from './windows/EcosystemWindow';
import InsightsWindow from './windows/InsightsWindow';
import PartnersWindow from './windows/PartnersWindow';
import TerminalWindow from './windows/TerminalWindow';

const WindowManager = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows.windows);
  const activeWindowId = useSelector((state) => state.windows.activeWindow);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeWindowId) {
        dispatch(closeWindow(activeWindowId));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeWindowId, dispatch]);

  const renderWindowContent = (window) => {
    switch (window.type) {
      case 'home':
        return <HomeWindow />;
      case 'about':
        return <AboutWindow />;
      case 'ventures': // Keeping for legacy/compatibility, but content should map to Platforms
        return <VenturesWindow />; 
      case 'infrastructure':
        return <InfrastructureWindow />;
      case 'platforms':
        return <PlatformsWindow />;
      case 'ecosystem':
        return <EcosystemWindow />;
      case 'insights':
        return <InsightsWindow />;
      case 'partners':
        return <PartnersWindow />;
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

