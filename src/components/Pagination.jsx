import React, {useEffect} from "react";

import {Button, ButtonGroup, Grid, List} from "@mui/material";
import usePagination from '@mui/material/usePagination';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'
import { AiTwotoneSetting } from "react-icons/ai";



//import Pagination from 'react-mui-pagination';







export default function Pagination (props)  {
  
    const breakpoints = createBreakpoints({})

    const {noOfPages, handleChange, page, showFirst, showLast, testing} = props;

    const { items } = usePagination({
      count: noOfPages,
      page :page,
              onChange : handleChange,
              defaultPage : 1,
              color : "primary",
              size : "medium",
              showFirstButton : showFirst,
              showLastButton : showLast,
              hideNextButton : testing,
              boundaryCount : 1,
              siblingCount : 1,
              
              
    });
  
    return (
      <>
      <Grid container  flex direction='row' sx={{justifyContent:'space-around'}} > 
      <Grid item xs={12} md={12} sm={12} margin={0} sx={{justifyContent:'space-around'}} dir='rtl'> 
        <List   sx={{display :'flex', justifyContent: 'center', margin:'2vh'}}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
            let customText = ''
            if(type==='first' ) {customText ='الأولى'} ;
            if(type==='last') {customText ='الأخيرة'} ;
            if(type==='next') {customText ='التالية'} ;
            if(type==='previous') {customText ='السابقة'} ;
            
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '...'
            } else if (type === 'page') {
              children = (
                  <Grid container>
                      <ButtonGroup>
                <Button
                variant ="contained"
                color='inherit'
  
                
                
                  
                  sx={{
                    color: selected ? 'white' : 'green',
                    backgroundColor: selected ? "orange" : 'white',
                    boxShadow :"0 0",
                    border :'1px solid rgba(0,0,0,.1)',
                    '&:hover': { backgroundColor:'#ccccff',color:'black' },
                   
                    
                    
                  }}
                  {...item}
                >
                  {page}
                </Button>
                </ButtonGroup>
                </Grid>
              );
            } else {
              children = (
                <Button {...item}
                variant ="contained"
                color='inherit'
  
                
                
                  
                  sx={{
                    color: selected ? 'white' : 'green',
                    backgroundColor: selected ? "orange" : 'white',
                    boxShadow :"0 0",
                    border :'1px solid rgba(0,0,0,.1)',
                    '&:hover': { backgroundColor:'#ccccff',color:'black' },
                  }}>
  
                  {customText}
                  
                </Button>
              );
            }
  
            return ( 
            <li  key={index}> {children} </li>
            
             );
            
          })}
        </List>
        </Grid>
        </Grid>
      </>
    );
  }
  