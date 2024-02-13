import Body from './components/Body';
import userStore from "./utils/userStore";
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={userStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
