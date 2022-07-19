import getFolders from "../getFolders";

const FolderService = () => {
    let database;
    let flattenedDatabase;

    const initialize = async () => {
        database = await getFolders();
        flattenedDatabase = flattenDatabase();

        return true;
    }

    const flattenDatabase = () => {
        const recursive = (folder, parentPaths = []) => {
            const children = folder.children || [];
            falltenFolderMap.set(folder.id, {
                paths: [...parentPaths, folder],
                children: children
            })

            if(children.length) {
                children.map(item => recursive(item, [...parentPaths, folder]));
            }
        }

        let falltenFolderMap = new Map();
        recursive(database);
        return falltenFolderMap;
    }

    const getFolderById = (folderId = 0) => {
        if(!flattenedDatabase) return [];
        return flattenedDatabase.get(folderId) || [];
    }

    return {
        initialize,
        getFolderById
    }
}

const folderService = FolderService();
export {
    folderService
}; 