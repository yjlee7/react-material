import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ItemList({ items, addCart }) {
  return (
    <div style={{ padding: '5px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={3} key={`${item.name + index}`}>
              <Item>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <Button variant="outlined" size="small" onClick={() => addCart(item)} fullWidth>
                  cart 추가
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ItemList;
