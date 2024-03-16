
import { RouterProvider } from 'react-router'
import {router} from './router';
import { RootStoreContext } from './contexts/RootStoreContext';
import { RootStore } from './stores';

function App() {
    const rootStore = new RootStore();
  return (
    <RootStoreContext.Provider value={rootStore}>
        <RouterProvider router={router} />
    </RootStoreContext.Provider>
  )
}

export default App
