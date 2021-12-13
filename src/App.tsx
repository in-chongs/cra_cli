import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { setTwoToneColor } from '@ant-design/icons';
import Home from "./Pages/Home";
import './styles/index.less';

const App: FC = () => {

  useEffect(() => {
    setTwoToneColor('#0045ff')
  }, [])

  return (<Router >
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>)
};

export default App