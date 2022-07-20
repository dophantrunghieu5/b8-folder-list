import { Card, Space } from "antd";
import { FolderFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folder = ({ item }) => {
    return <>
        <Link to={`/folder/${item.id}`}>
            <Card>
                <Space size="small">
                    <FolderFilled style={{ fontSize: '24px', color: '#08c' }} />
                    {item.name}
                </Space>
            </Card>
        </Link>
    </>
}

export {
    Folder
};