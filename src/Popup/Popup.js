import React from 'react';
import * as ReactDOM from 'react-dom';

const Popup = ({ children, className = 'root-portal', el = 'div' }) => {
  const [container] = React.useState(document.createElement(el));

  container.classList.add(className);
  container.classList.add('modal');

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Popup;
