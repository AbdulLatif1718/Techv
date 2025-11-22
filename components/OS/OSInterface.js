import { useSelector } from 'react-redux';
import BootScreen from './BootScreen';
import Desktop from './Desktop';
import TopBar from './TopBar';
import Dock from './Dock';
import WindowManager from './WindowManager';

const OSInterface = () => {
  const bootComplete = useSelector((state) => state.windows.bootComplete);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <BootScreen />
      {bootComplete && (
        <>
          <Desktop>
            <WindowManager />
          </Desktop>
          <TopBar />
          <Dock />
        </>
      )}
    </div>
  );
};

export default OSInterface;

