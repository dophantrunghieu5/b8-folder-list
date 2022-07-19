import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import { useParams } from "react-router-dom";
import Breadcrumb from './components/Breadcrumb';
import FolderList from './components/FolderList';
import { FolderState } from './context';
const { Header, Footer, Sider, Content } = Layout;

const FolderPage = () => {
  const { id } = useParams();
  const { currentFolder, openFolder } = FolderState();
  const { paths = [], children: folders = [] } = currentFolder || {};

  useEffect(() => {
    id && openFolder(Number(id));
  }, [id]);

  return (
    <Layout>
      <Content>
        <Breadcrumb paths={paths} />
        <FolderList folders={folders} />
      </Content>
    </Layout>
  );
};

export default FolderPage;
