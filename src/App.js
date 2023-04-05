import './App.css';

import ProductItem from './components/productItems';

function App() {
  return (
    <div className="App">
      <section className='product_grid'>
        <ProductItem 
        imageURL={'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg'}
        productName={"cocooil"}
        price={"30$"}
        button={"BUY NOW"}
      />
        <ProductItem 
        imageURL={'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
        productName={"Polaroid"}
        price={"60$"}
        button={"BUY NOW"}
      />
        <ProductItem 
        imageURL={'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
        productName={"Maui Moisture"}
        price={"20$"}
        button={"BUY NOW"}
      />
      </section>
    </div>
  );
}

export default App;
