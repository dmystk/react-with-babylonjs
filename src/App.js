
import { useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { changeSize } from './redux/action';
import { CameraType } from './3d/game';
import GameCanvas from './GameCanvas';
import './App.css';
import './react-tabs/style.css';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>

        <TabPanel>
          <div className="canvas-area">
            <GameCanvas camera={CameraType.CAMERA_LOOKING_DOWN} />
          </div>
          <div className="control-area">
            <button onClick={e => { dispatch(changeSize(1)) }}>change box's scale to 1x</button>
            <button onClick={e => { dispatch(changeSize(2)) }}>change box's scale to 2x</button>
            <button onClick={e => { dispatch(changeSize(3)) }}>change box's scale to 3x</button>
          </div>
        </TabPanel>

        <TabPanel>
          <p>Another Viewpoint</p>
          <GameCanvas camera={CameraType.CAMERA_LOOKING_UP} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
