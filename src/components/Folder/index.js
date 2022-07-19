import { Card } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folder = ({item}) => {
    return <>
        <Card>
            <Link to={`/folder/${item.id}`}>
                <FolderOutlined />
                {item.name}
            </Link>
        </Card>
    </>
}

export default Folder;