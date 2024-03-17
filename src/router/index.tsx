
import { createBrowserRouter } from 'react-router-dom';
import {PageLayout} from '../components';
import { Route, createRoutesFromElements } from 'react-router';
import { MyOrdersPage, CreateOrderPage, OrderPage } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path='/myOrders' element={<MyOrdersPage/>} />
      <Route path='/upload' element={<CreateOrderPage/>} />
      <Route path='/order' element={<OrderPage />} />
    </Route>
),
);
