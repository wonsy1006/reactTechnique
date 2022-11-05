import CounterContainer from './containers/CounterContainer.jsx';
import TodosContainer from './containers/TodosContainer.jsx';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
