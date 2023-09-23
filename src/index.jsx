import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './app.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
