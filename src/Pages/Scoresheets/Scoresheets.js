import { useState } from "react";
import { scoresheet } from "../../Lib/static/data";
import Layout from "../Layout/Layout";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { DataGrid, gridClasses, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';


const Scoresheets = () => {
    // Client side database management for scoresheet offline
    // const DB = indexedDB;
    // const request = DB.open("scoresheet", 1);

    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
        [`& .${gridClasses.row}.even`]: {
            backgroundColor: "var(--gray)",
        },
        [`& .${gridClasses.row}.odd`]: {
            backgroundColor: "var(--white)",
        }
    }));

    function CustomToolbar() {
        return (
            <GridToolbarContainer 
            sx={{
                justifyContent: "flex-end"
            }}>
                <GridToolbarExport 
                csvOptions={{disableToolbarButton: true}}
                printOptions={{
                    fileName: "JSS 1 Scoresheets",
                    hideFooter: true,
                    hideToolbar: true
                }} />
            </GridToolbarContainer>
        );
    }
        
    const [pageSize, setPageSize] = useState(10)

    function setCellClassName(params){
        if (params.value < params.colDef.maxValue / 2) {
            return "score-failed";
        }
    }
    
    function forceLimit(params){
        if (params.value > params.colDef.maxValue) {
            return params.colDef.maxValue;
          } else {
            return params.value
          }
    }

    function getTotal(params){
        return params.row.ats1 + params.row.ats2 + params.row.midTerms + params.row.exams
    }

    const dataIsEditable = true
    const column = [
        { 
            field: 'names', 
            headerName: 'Names', 
            description: "Student name",
            width: 180,
            editable: false
        },
        { 
            field: 'ats1', 
            headerName: 'ats I (10pts)', 
            description: "First assessment score",
            type: 'number', 
            editable: dataIsEditable,
            flex: 1, 
            maxValue: 10,
            valueGetter: forceLimit,
            cellClassName: setCellClassName
        },
        { 
            field: 'ats2', 
            headerName: 'ats II (10pts)', 
            description: "Second assessment score",
            type: 'number', 
            editable: dataIsEditable,
            flex: 1, 
            maxValue: 10,
            valueGetter: forceLimit,
            cellClassName: setCellClassName
        },
        { 
            field: 'midTerms', 
            headerName: 'mid terms (20pts)', 
            description: "Mid term test score",
            type: 'number', 
            editable: dataIsEditable,
            flex: 1, 
            maxValue: 20,
            valueGetter: forceLimit,
            cellClassName: setCellClassName
        },
        { 
            field: 'exams', 
            headerName: 'exams (60pts)', 
            description: "Exam score",
            type: 'number', 
            editable: dataIsEditable,
            flex: 1, 
            maxValue: 60,
            valueGetter: forceLimit,
            cellClassName: setCellClassName
        },
        { 
            field: 'total', 
            headerName: 'total (100pts)', 
            description: "Student total score",
            type: 'number', 
            editable: dataIsEditable,
            flex: 1, 
            maxValue: 100,
            valueGetter: getTotal,
            cellClassName: setCellClassName
        }
    ]

    return ( 
        <Layout>
            <Box 
            sx={{ 
                height: 500,
                marginTop: "6rem"
            }}>
                <StripedDataGrid
                    columns={column}
                    rows={scoresheet.data}
                    experimentalFeatures={{ newEditingApi: true }}
                    editMode="row"
                    rowsPerPageOptions={[10, 15, 20, 50, 100]}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    sx={{
                        maxWidth: "1000px",
                        margin: "auto",
                        "& .score-failed": {
                            color: "var(--red)"
                        }
                    }}
                    components={{Toolbar: CustomToolbar}}
                    localeText={{
                        toolbarExport: "Download Scoresheet"
                    }}
                    getRowClassName={(params) =>  
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                />
            </Box>
        </Layout>
        );
}
 
export default Scoresheets;