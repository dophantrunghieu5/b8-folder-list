import { Breadcrumb as AntBreadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumb = ({paths = []}) => {
    return <>
        <AntBreadcrumb>
            <AntBreadcrumb.Item>
                <Link to="/">Home</Link>
            </AntBreadcrumb.Item>
            {paths.map(path => {
                return <AntBreadcrumb.Item>
                    <Link to={`/folder/${path.id}`}>{path.name}</Link>
                </AntBreadcrumb.Item>
            })}
        </AntBreadcrumb>
    </>
}

export default Breadcrumb;