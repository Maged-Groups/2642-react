import { createRoot } from 'react-dom/client';


// React router DOM
import { BrowserRouter } from 'react-router-dom'


// Redux

import { Provider } from 'react-redux';
import store from '@/redux'

// CSS
import './index.css'


// App
import App from './App'

const mainRoot = createRoot(root)

mainRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)