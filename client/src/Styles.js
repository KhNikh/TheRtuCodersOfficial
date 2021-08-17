import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container:{
       display:'flex',
       flexDirection : 'column',
       alignItems: 'center',
       width:'100vw',
       overflow:'hidden'
    },
    main:{

        width:'100vw',

    },
    appBar: { 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100vw'

    },
    appBarLeft:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
      minHeight: '50px'
    },
    appBarRight:{
      marginRight:'15px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
      minHeight: '50px'
    },
    
    heading: {
      color: 'rgba(0,183,255, 1)',
    },
    image: {
      marginLeft: '15px',
    },
    posts:{
        backgroundColor:'blue'
    },
    form:{
        backgroundColor:'pink'
    },
    a:{

        textDecoration:'none',
        margin:'15px',
        color:'black',
        '&:hover':{
          
            color:'blue'
        }
    },
    grid:{
        margin:'20px'

    },
    Typo:{
        backgroundColor:'green',
    },
    profile:{
     
      textDecoration:'none',
      color:'black',
      margin:'20px',
      padding:'20px',
      '&:hover':{
          
        color:'blue'
    }
    }

  }));