import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "cateName", headerName: "Name", width: 130 },
];

const rows = [
    { id: 1, cateName: "Coffee" },
    { id: 2, cateName: "Non Coffee" },
    { id: 3, cateName: "Cake" },
    { id: 4, cateName: "Pastry" },
    { id: 5, cateName: "Cookie" },
    { id: 6, cateName: "Coffee" },
    { id: 7, cateName: "Non Coffee" },
    { id: 8, cateName: "Cake" },
    { id: 9, cateName: "Pastry" },
    { id: 10, cateName: "Cookie" },
];



const Mydatatable = () => {
    // Assuming rows and columns are defined elsewhere in your code
    const pageSizeOptions = [5, 10];
    const initialState = {
        pagination: {
            paginationModel: {
                page: 0,
                pageSize: pageSizeOptions[0] // Set the initial pageSize to the first option
            },
        },
    };

    return (
        <div className="mydatatable">
            <div className="mydatatableTitle">All Data</div>
            <DataGrid
                rows={rows}
                columns={columns.concat()}
                initialState={initialState}
                pageSizeOptions={pageSizeOptions}
                checkboxSelection
            />
        </div>
    );
};


;

export default Mydatatable;