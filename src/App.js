import NewsContainer from './components/NewsContainer';
import SearchFormContainer from './components/SearchFormContainer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <SearchFormContainer />
      <NewsContainer />
    </div>
  );
}

export default App;
