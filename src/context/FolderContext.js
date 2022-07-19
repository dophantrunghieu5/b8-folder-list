import { createContext, useContext, useEffect, useState } from "react";
import { folderService } from "../services"; 
import { Loading } from "../components";

const initialState = {
    currentFolder: null,
    loading: false,
    openFolder: () => {}
};

const folderCtx = createContext(initialState);

const FolderContext = ({ children }) => {
    const [currentFolder, setCurrentFolder] = useState();
    const [initialized, setInitialized] = useState(false);

    const openFolder = (parentId) => {
        const folder = folderService.getFolderById(parentId);
        setCurrentFolder(folder);
    };
    
    useEffect(async () => {
        const initialized = await folderService.initialize();
        setInitialized(initialized);
    }, []);

    return (
        <folderCtx.Provider
            value={{
                openFolder,
                currentFolder
            }}
        >   
            {initialized && children}
            {!initialized && <Loading />}
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

