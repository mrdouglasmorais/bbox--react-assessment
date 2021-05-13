import { useCallback, useState } from "react";
import { evaluate } from "mathjs";
import ButtonsPanel from "@component/ButtonPanel";
import Display from "@component/Display";

import "./style.css";

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  const handleClick = useCallback( (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const buttonName: string = event.currentTarget.innerText;

    if (buttonName === "AC") {
      setDisplayValue("0")
    }
    
    else if (buttonName === "=") {

      try {
        const replacedValue = displayValue.replace("x", "*").replace("÷", "/");
        const value: any = evaluate(replacedValue);
        setDisplayValue(value.toString());
      } catch (error) {
        setDisplayValue('error');
      };
      
    } else {
      if (displayValue === "0") setDisplayValue(buttonName);
      else setDisplayValue((value): string => `${value}${buttonName}`);
    }
  }, [displayValue]);

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonsPanel handler={handleClick} />
    </div>
  );
};

export default App;
