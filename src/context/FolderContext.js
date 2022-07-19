import { createContext, useContext, useEffect, useState } from "react";
import { folderService } from "../services"; 

const initialState = {
    currentFolder: null,
    loading: false,
    openFolder: () => {}
};

const folderCtx = createContext(initialState);

const FolderContext = ({ children }) => {
    const [currentFolder, setCurrentFolder] = useState();
    const [initialzed, setInitialzed] = useState(false);

    const openFolder = (parentId) => {
        const folder = folderService.getFolderById(parentId);
        setCurrentFolder(folder);
    };
    
    useEffect(async () => {
        const initialzed = await folderService.initialize();
        setInitialzed(initialzed);
    }, []);

    return (
        <folderCtx.Provider
            value={{
                openFolder,
                currentFolder
            }}
        >
            {initialzed && children}
        </folderCtx.Provider>
    );
};

const FolderState = () => {
    return useContext(folderCtx);
};

export {
    FolderContext,
    FolderState
};

