import logo from './logo.svg';
import './App.css';

import { Flex, Layout } from "antd";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewMatchPage from './pages/NewMatchPage';
import LastMatchesPage from './pages/LastMatchesPage';
import Navbar from './components/Navbar';

const { Content, Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ height: 80 }}>
          <Navbar /> 
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/last-matches" element={<LastMatchesPage />} />
            <Route path="/new-match" element={<NewMatchPage />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
