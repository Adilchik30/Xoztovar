import React from "react";
import "./TopNavbar.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PlusOutlined,
  AppstoreOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Button, Layout, Menu, theme, Input, Select, Avatar, Dropdown } from 'antd'
import { FaUserDoctor } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
function TopNavbar() {
  const userMenu = (
    <Menu>
        <Menu.Item key="login" icon={<UserOutlined />}>
            <Link to="/login">Kirish</Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<SettingOutlined />}>
            <Link to="/register">Ro'yxatdan o'tish</Link>
        </Menu.Item>
    </Menu>
);
  return (
    <div className="top_navbar">
      <div className="left_side_top_navbar">
        <FaUserDoctor />
        <p>Qodirov Odilbek</p>
        <IoCall />
        <p>+998 93 276 69 64</p>
      </div>
      <Dropdown overlay={userMenu} placement="bottomRight">
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Dropdown>
    </div>
  );
}

export default TopNavbar;
