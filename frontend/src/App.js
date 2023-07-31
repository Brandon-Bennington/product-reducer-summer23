// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';

function App() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:4000/api/products/get-all-products');
      const data = await response.json();
      dispatch({ type: 'get-products', payload: data });
    };
    loadData();
  }, [dispatch]);

  const getAPIdata = async () => {
    const response = await fetch('http://localhost:4000/api/store/list-products');
    const data = await response.json();
    dispatch({ type: 'add-store', payload: data });
  };

  return (
    <div className="App">
      <h1>Video Game Products</h1>
      <button onClick={() => dispatch({ type: 'add-product' })}>
        Add Product
      </button>
      <button onClick={getAPIdata}>API</button>
      {products.map(element => (
        <ProductCard
          key={element.id}
          id={element.id}
          title={element.title}
          publisher={element.publisher}
          genre={element.genre}
          price={element.price}
          deleteProduct={id =>
            dispatch({ type: 'delete-product', id: id })
          }
          editProduct={param =>
            dispatch({ type: 'edit-product', editedObj: param })
          }
        />
      ))}
    </div>
  );
}

export default App;
