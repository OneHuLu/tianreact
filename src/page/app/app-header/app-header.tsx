import React from "react";
import "./app-header.less";
import logo from "../img/dogKing.jpg";

import { Image } from "antd";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="logo">
          <Image src={logo} preview={false} width={100} height={40} />
        </div>
        <div className="header-nav-items">
          <div className="nav-item">
            <div className="nav-item-hover">
              <span>下拉框一</span>
              <span className="row"></span>
              <div className="down-triangle" />
            </div>
            {/* 下拉框 */}
            <div className="nav-item-slide">
              <div className="nav-item-slide-item">名人堂</div>
              <div className="nav-item-slide-item">历史进程</div>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-hover">
              <span>下拉框二</span>
              <span className="row"></span>
              <div className="down-triangle" />
            </div>
            {/* 下拉框 */}
            <div className="nav-item-slide">
              <div className="nav-item-slide-item">名人堂2</div>
              <div className="nav-item-slide-item">历史进程2</div>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-item-hover">
              <span>下拉框三</span>
              <span className="row"></span>
              <div className="down-triangle" />
            </div>
            {/* 下拉框 */}
            <div className="nav-item-slide">
              <div className="nav-item-slide-item">名人堂3</div>
              <div className="nav-item-slide-item">历史进程3</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
