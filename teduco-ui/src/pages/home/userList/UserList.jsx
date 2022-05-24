import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';

export default function UserList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 160 },
    { field: 'lastName', headerName: 'Last name', width: 160 },

    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 120,
    },
    {
      field: 'Course',
      headerName: 'Course',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
    { 
      field: 'note',
    headerName: 'Note',
    type: 'number',
    width: 120}
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,Course:"Informatik",note:3},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,Course:"Informatik",note:3},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,Course:"Informatik",note:3},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,Course:"Informatik",note:3},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,Course:"Informatik",note:3},
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150,Course:"Informatik",note:3 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,Course:"Informatik",note:3},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,Course:"Informatik",note:3 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Course:"Informatik",note:3},
  ];
  

  return (
    <div style={{ height: 700, width: '100%' }} className="userList">
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}
