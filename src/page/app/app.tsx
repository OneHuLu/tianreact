import React from "react";
import AppHeader from "./app-header/app-header";
import { Content, Footer } from "antd/es/layout/layout";
import Home from "../home";

export default function AppIndex() {
  return (
    <div>
      {/* 头部 */}
      <AppHeader />
      {/* 首页内容区域 */}
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Home />
        </div>
      </Content>
      {/* 页脚 */}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </div>
  );
}
