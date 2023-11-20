import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppIndex from "./page/app/app";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        {/* 头部 */}
        <AppIndex />
      </Layout>
    </div>
  );
}

export default App;
