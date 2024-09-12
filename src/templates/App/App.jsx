import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProviders';
import './styles.css';

// App.jsx
function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
