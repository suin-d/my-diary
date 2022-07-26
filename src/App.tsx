import Layout from 'components/layout/layout';
import Main, { diaryCardProps } from 'pages/main';
import Write from 'pages/write';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [diaryCards, setDiaryCards] = useState<diaryCardProps[]>([]);

  const createDiary = (diaryCard: diaryCardProps) => {
    const updated = [...diaryCards, diaryCard];
    setDiaryCards(updated);
  };

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main diaryCards={diaryCards} />} />
          <Route path="/write" element={<Write onAddDiary={createDiary} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
