import React from "react";
import AppHeader from "./app-header/app-header";
import { Footer } from "antd/es/layout/layout";
import Home from "../home";

export default function AppIndex() {
  return (
    <div>
      {/* 头部 */}
      <AppHeader />
      {/* 首页内容区域 */}
      <Home />
    </div>
  );
}
