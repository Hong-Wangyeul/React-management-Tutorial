import './App.css';
import Customer from './components/Customer';
import CustomerList from './CustomerList/CustomerList';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { withStyles } from '@mui/material';
import { Paper } from '@mui/material';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

function App() {
    return <Paper>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                    <TableCell>결혼유무</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
    {CustomerList.map((customerList) => {
          return <Customer key={customerList.id} customerList={customerList} />;
  } )}
        </TableBody>
      </Table>
    </Paper>
  
}

export default App;
