import './App.css';
import Customer from './components/Customer';
import CustomerList from './CustomerList/CustomerList';


function App() {
    return CustomerList.map((customerList) => {
          return <Customer key={customerList.id} customerList={customerList} />;
  } )
  
}

export default App;
