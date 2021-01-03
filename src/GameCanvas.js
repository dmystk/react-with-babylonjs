
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { GameFactory } from './3d/game';
import './GameCanvas.css';

const GameCanvas = (props) => {
  const renderCanvas = useRef(null);

  const game = GameFactory.getInstance();

  const size = useSelector(state => state.size);
  game.setBoxSize(size);

  useEffect(() => {
    game.registerView(renderCanvas.current, props.camera);
  }, [renderCanvas, game, props]);

  return (
    <div className="canvas-container">
      <canvas ref={renderCanvas}></canvas>
    </div>
  );
};

export default GameCanvas;
