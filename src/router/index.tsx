
import { createBrowserRouter } from 'react-router-dom';
import {PageLayout} from 'shared';
import { Route, createRoutesFromElements } from 'react-router';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />}>
          <Route index element={<></>} />
        </Route>,
    ),
);
