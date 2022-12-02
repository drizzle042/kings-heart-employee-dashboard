import { useEffect } from "react";
import { createDB, populateDBCollection } from "../../Lib/utils/OfflineDB";
import { scoresheet } from "../../Lib/static/data";

const SyncDB = () => {

    useEffect(() => {
        createDB("scoresheet", 1, "jss1ThirdTerm")
        populateDBCollection("scoresheet", 1, "jss1ThirdTerm", scoresheet.data)
    }, [])
    return ({});
}
 
export default SyncDB;