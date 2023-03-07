import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { styled,  } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: ' #00C0A5ff',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
   position: 'absolute',
   marginTop:7,
   color:'#fff',
  pointerEvents: 'none',
  // display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    color:'#fff',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
<Box>
<Box >
  <Stack direction='row' sx={{display:'flex', padding:4, justifyContent:'space-between'}}>
  <TextField fullWidth placeholder='What are you looking for?' id="fullWidth" />
  <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

  </Stack>

<Stack
  direction={{ xs: 'column', sm: 'row' }}

  sx={{display:'flex', padding:4, justifyContent:'space-between'}}
>
<FormControlLabel control={<Checkbox defaultChecked />} label="ExportAll" />


  <Typography > Status</Typography>

  <Typography > Action</Typography>
</Stack>
</Box>
<Divider />
<TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
</Box>

  );
}