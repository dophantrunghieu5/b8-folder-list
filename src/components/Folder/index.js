import { Card, Space } from "antd";
import { FolderFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folder = ({item}) => {
    return <>
        <Card>
            <Link to={`/folder/${item.id}`}>
                <Space size="small">
                    <FolderFilled style={{ fontSize: '24px', color: '#08c' }} />
                    {item.name}
                </Space>
            </Link>
        </Card>
    </>
}

export {
    Folder
};