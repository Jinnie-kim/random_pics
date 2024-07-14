import Route from './component/Route';
import ImageArchive from './page/ImageArchivePage';
import ImageSearch from './page/ImageSearchPage';

function App() {
  return (
    <div>
      <Route path="/">
        <ImageSearch />
      </Route>
      <Route path="/archive">
        <ImageArchive />
      </Route>
    </div>
  );
}

export default App;
