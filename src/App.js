import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Sales from './Components/Sales';
import ProductsAdmin from './Components/products/ProductsAdmin';
import ProductsAdd from './Components/products/ProductsAdd';
import ProductsEdit from './Components/products/ProductsEdit';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route>
      </Routes>
    </div>
  );
  /**
   * 
import ClientsAdmin from './components/clients/ClientsAdmin';
import ClientsAdd from './components/clients/ClientsAdd';
import ClientsEdit from './components/clients/ClientsEdit';
import UsersAdmin from './components/clients/UsersAdmin';
import UsersAdd from './components/clients/UsersAdd';
import UsersEdit from './components/clients/UsersEdit';
   * 
        
        <Route path="/clients" element={<ClientsAdmin />}></Route>
        <Route path="/clients/add" element={<ClientsAdd />}></Route>
        <Route path="/clients/edit" element={<ClientsEdit />}></Route>
        <Route path="/users" element={<UsersAdmin />}></Route>
        <Route path="/users/add" element={<UsersAdd />}></Route>
        <Route path="/users/edit" element={<UsersEdit />}></Route>
   * 
   */
}

export default App;
