import './App.css';
import Graph from './components/graph';
import Table from './components/table';

function App() {
  return (
    <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-lg-10'>
        <div className='row mt-3 mb-5'>
        <Graph/> 
        <Graph/> 
        <Graph/> 
        <Graph/> 
      </div>

        <Table/>
        </div>
    </div>
 
     
  );
}

export default App;
