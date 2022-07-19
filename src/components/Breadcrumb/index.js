import { Breadcrumb as AntBreadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumb = ({paths = []}) => {
    return <>
        <AntBreadcrumb>
            {paths.map(path => {
                return <AntBreadcrumb.Item key={path.id}>
                    <Link to={`/folder/${path.id}`}>{path.name}</Link>
                </AntBreadcrumb.Item>
            })}
        </AntBreadcrumb>
    </>
}

export { 
    Breadcrumb 
};