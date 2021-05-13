import "./style.css";

import { IPropsDisplay } from '../../interface';

const ButtonsPanel: React.FC<IPropsDisplay> = ({ handler }) => {
  return (
    <div className="component-button-panel">
      <div>
        <div className="component-button">
          <button onClick={handler}>AC</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>+/-</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>%</button>
        </div>
        <div className="component-button orange">
          <button onClick={handler}>÷</button>
        </div>
      </div>
      <div>
        <div className="component-button">
          <button onClick={handler}>7</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>8</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>9</button>
        </div>
        <div className="component-button orange">
          <button onClick={handler}>x</button>
        </div>
      </div>
      <div>
        <div className="component-button">
          <button onClick={handler}>4</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>5</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>6</button>
        </div>
        <div className="component-button orange">
          <button onClick={handler}>-</button>
        </div>
      </div>
      <div>
        <div className="component-button">
          <button onClick={handler}>1</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>2</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>3</button>
        </div>
        <div className="component-button orange">
          <button onClick={handler}>+</button>
        </div>
      </div>
      <div>
        <div className="component-button wide">
          <button onClick={handler}>0</button>
        </div>
        <div className="component-button">
          <button onClick={handler}>.</button>
        </div>
        <div className="component-button orange">
          <button onClick={handler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPanel;