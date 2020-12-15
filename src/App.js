import React, {useEffect,useState} from 'react';
import {Card,Button,CardContent,CardAction,CssBaseline, Container,Typography,InputLabel,MenuItem,FormHelperText,FormControl,Select} from '@material-ui/core'
import{makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 20
  },
  CardContent:{
    padding: '24px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));


function App() {
 
  const [category, setCategory] = useState("all")
  const classes = useStyles();
  function getjoke() {
    console.log("clicked")
    // fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)
    //   .then((res) =>res.json())
    //   .then((res) =>{
    //     console.log(res)
    //     setJokes(res.result)
    //     console.log(jokes)
    //   })
    //   .catch((err) => console.log(err));
  }
  
  const handleChange = (event) => {
    setCategory(event.target.value);
    fetch(`https://api.chucknorris.io/jokes/search?query=${event.target.value}`)
    .then((res) =>res.json())
    .then((res) =>{
      console.log(res)
      setJokes(res.result)
      console.log(jokes)
    })
    .catch((err) => console.log(err));
    //console.log(category)
    
  };
  
  const[jokes,setJokes] = useState([])
  // useEffect((category)=>{
  //   if (!category) category="all";
  //   fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)
  //   .then((res) =>res.json())
  //   .then((res) =>{
  //     console.log(res)
  //     setJokes(res.result)
  //     //console.log(jokes)
  //   })
  //   .catch((err) => console.log(err));
  // },[])
  return (
    <div className="App">
      <CssBaseline/>
      <Container>
        <Typography variant='h1' align='center'>
          Chuck Norris jokes
        </Typography>
          <Typography variant='h5' align='center'>
          Select category
          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={"all"}>
            All
          </MenuItem>
          <MenuItem value={'animal'}>Animal</MenuItem>
          <MenuItem value={'career'}>Career</MenuItem>
          <MenuItem value={'celebrity'}>Celebrity</MenuItem>
          <MenuItem value={'dev'}>Dev</MenuItem>
          <MenuItem value={'food'}>Food</MenuItem>
          <MenuItem value={'history'}>History</MenuItem>
          <MenuItem value={'money'}>Money</MenuItem>
          <MenuItem value={'movie'}>Movie</MenuItem>
          <MenuItem value={'music'}>Music</MenuItem>
          <MenuItem value={'political'}>Political</MenuItem>
          <MenuItem value={'religion'}>Religion</MenuItem>
          <MenuItem value={'science'}>Science</MenuItem>
          <MenuItem value={'sport'}>Sport</MenuItem>
          <MenuItem value={'travel'}>Travel</MenuItem> 
        </Select>
      </FormControl>
      {/* <Button variant="contained" color="primary" onClick={() => ({handleClick})  }>Get</Button> */}
        </Typography>
          
          {jokes.map(value =>(
            <Card key={jokes.id} className={classes.card}>
              <CardContent className={classes.CardContent}>
                <Typography>{value.value}</Typography>
              </CardContent>
              
            </Card>
          ))}
        
      </Container> 
    </div>
  );
  
  
}

export default App;
