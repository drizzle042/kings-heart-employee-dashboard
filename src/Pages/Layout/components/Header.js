import styles from "../styles/styles.module.css";
import { profile } from '../../../Lib/static/data';
import ProfileImage from "../../../Lib/assets/172139357_1823740611148344_7079540914338843565_n.jpg";
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

const Header = ({ setOpen, open, drawerWidth }) => {
    
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        }),
    }));
    
    return (
      <Box>
        <AppBar position="fixed" open={open} sx={{ bgcolor: "#fff", color: "#000" }}>
          <div className={styles.flexHeader}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MenuIcon 
                size="large"
                onClick={() => {
                    setOpen(!open)
                }}
                sx={{ 
                  ...(open && { display: 'none' }),
                  mr: 2, 
                  cursor: "pointer" 
                }}/>
            </Box>
            <div className={styles.clickableDiv}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <Avatar src={ProfileImage}/>
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
                <Typography 
                  sx={{ 
                    padding: "0.4rem", 
                    marginTop: "auto", 
                    marginBottom: "auto"
                  }}>{profile.name}</Typography>
                <ExpandMoreSharpIcon />
              </Box>
            </div>
          </div>
        </AppBar>
      </Box>
    );
}
 
export default Header;