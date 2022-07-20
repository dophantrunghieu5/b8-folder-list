import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, FolderList } from '../components';
import { FolderState } from '../context';
import { Space } from 'antd';

const FolderPage = () => {
  const { id } = useParams();
  const { currentFolder, openFolder } = FolderState();
  const { paths = [], children: folders = [] } = currentFolder || {};

  useEffect(() => {
    id && openFolder(Number(id));
  }, [id]);

  return (
    <>
      <Space size="small" direction="vertical" style={{width: '100%'}}>
        <Breadcrumb paths={paths} />
        <FolderList folders={folders} />
      </Space>
    </>
  );
};

export default FolderPage;
