import styles from "../styles/styles.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Admin } from "../../../Lib/Endpoints/Endpoints";
import useFetch from "../../../Lib/Hooks/Requests/useFetch";
import Loader from "../../../Lib/Loader/Loader";


const Search = () => {

    const { data: classes, isLoading: FetchClassesLoading, error: errorOnFetchClasses } = useFetch(Admin.getExistingClasses)
    
    const { data: subjects, isLoading: FetchSubjectsLoading, error: errorOnFetchSubjects } = useFetch(Admin.getExistingSubjects)

    return ( 
        <div
        className={styles.searchBar}>
            {(FetchClassesLoading || FetchSubjectsLoading) && <Loader />}
            <TextField 
            select
            className={styles.searchBarSelect}
            sx={{
                margin: "10px",
            }}
            label="Class">
                <MenuItem disabled>Class</MenuItem>
                {
                    classes ?
                    classes?.map((singleClass) => (
                        <MenuItem key={singleClass} value={singleClass}>{singleClass}</MenuItem>
                    )) : 
                    errorOnFetchClasses?.message
                }
            </TextField>
            <TextField 
            select
            className={styles.searchBarSelect}
            sx={{
                margin: "10px",
            }}
            label="Subject">
                <MenuItem disabled>Subjects</MenuItem>
                {
                    subjects ?
                    subjects?.map((singleSubject) => (
                        <MenuItem key={singleSubject} value={singleSubject}>{singleSubject}</MenuItem>
                    )) : 
                    errorOnFetchSubjects?.message
                }
            </TextField>
            <TextField 
            select
            className={styles.searchBarSelect}
            sx={{
                margin: "10px",
            }}
            label="Term">
                <MenuItem value="1">First term</MenuItem>
                <MenuItem value="2">Second term</MenuItem>
                <MenuItem value="3">Third term</MenuItem>
            </TextField>
            <Button
            variant="contained"
            size="large"
            className={styles.searchBarSelect}>
                Search
            </Button>
        </div>
     );
}
 
export default Search;