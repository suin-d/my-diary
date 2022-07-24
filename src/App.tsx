import Layout from 'components/layout/layout';
import Main from 'pages/main';
import Write from 'pages/write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
