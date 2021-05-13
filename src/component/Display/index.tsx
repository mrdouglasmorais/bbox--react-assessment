import "./style.css";

import { IPropsValue } from '../../interface';


const Display: React.FC<IPropsValue> = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

export default Display;
