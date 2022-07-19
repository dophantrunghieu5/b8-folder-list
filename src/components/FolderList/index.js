import { List } from "antd";
import { Folder } from '../Folder';

const FolderList = ({folders = []}) => {
    return <>
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={folders}
            renderItem={(item) => (
                <List.Item>
                    <Folder item={item}></Folder>
                </List.Item>
            )}
        />
    </>
}

export {
    FolderList
}