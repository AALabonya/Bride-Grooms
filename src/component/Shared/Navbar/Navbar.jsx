/* eslint-disable react/prop-types */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import { Avatar, CardMedia, Container, MenuItem, Stack } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
const drawerWidth = 240

// eslint-disable-next-line no-unused-vars
export default function Navbar(props) {
    // eslint-disable-next-line no-unused-vars
    const { window } = props;
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleToggleOpen = () => {
        setIsOpen((prevState) => !prevState); // Toggle isOpen state
      };
      const handleLogOut = () => {
        logOut();
        history.push('/login');
      };
      const handleClose = () => {
        setIsOpen(false); // Close the dropdown when clicking outside or selecting an item
      };
      const handleAvatarClick = (event) => {
        event.stopPropagation(); // Prevent the event from reaching the Stack onClick
        setIsOpen(true); // Open the dropdown when clicking the avatar
      };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, display: 'flex' }} >
                <CardMedia
                    component="div"
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <img
                        style={{ width: 55, marginRight: 10, borderRadius: '0.575rem', }}
                        src="https://i.ibb.co/vYjWpTZ/bride.png"
                        alt="Live from space album cover"
                        title="Shrimp and Chorizo Paella"
                    />
                    <div>
                        <h3>BrideAndGrooms</h3>

                    </div>
                </CardMedia>

            </Typography>
            <Divider />
            <List>

                <Link to="/" sx={{ color: '#fff' }}> <MenuItem> Home</MenuItem></Link>
                <Link to="/biodatas" sx={{ color: '#fff' }}> <MenuItem>Biodatas</MenuItem></Link>

                <Link to="/aboutUs" sx={{ color: '#fff' }}> <MenuItem>About Us</MenuItem></Link>
                <Link to="/contact" sx={{ color: '#fff' }}> <MenuItem>Contact</MenuItem></Link>

            </List>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex', height: '71px' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ height: '70px', backgroundColor: '#FFFFFF', color: '#FFEA00'}}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            width="40"
                            height="50"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            {/* Bride and Grooms <img src="https://i.ibb.co/vYjWpTZ/bride.png" alt="" /> */}
                            {/* <CardMedia

                                component="img"
                                width="40"
                                height="50"
                                image="https://i.ibb.co/vYjWpTZ/bride.png"
                                alt="Paella dish"
                            /> */}

                            <CardMedia
                                component="div"
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <img
                                    style={{ width: 55, marginRight: 10, borderRadius: '0.575rem', }}
                                    src="https://i.ibb.co/vYjWpTZ/bride.png"
                                    alt="Live from space album cover"
                                    title="Shrimp and Chorizo Paella"
                                />
                                <div>
                                    <h3>BrideAndGrooms</h3>

                                </div>
                            </CardMedia>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >

                            <ListItem>
                                <Link to="/" sx={{ color: '#0000FF' }} > <MenuItem> Home</MenuItem></Link>
                                <Link to="/biodatas" sx={{ color: '#0000FF' }}> <MenuItem>Biodatas</MenuItem></Link>
                                <Link to="/aboutUs" sx={{ color: '#0000FF' }}> <MenuItem>About Us</MenuItem></Link>
                                <Link to="/contact" sx={{ color: '#0000FF' }}> <MenuItem>Contact</MenuItem></Link>
                                <Stack direction="row" spacing={2} onClick={handleClose}>
                                    <div
                                        onClick={handleToggleOpen}
                                        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                                    >
                                        <div className="hidden md:block" onClick={handleAvatarClick}>
                                            <Avatar
                                                alt="profile"
                                                src={user && user.photoURL ? user.photoURL : ''}
                                                sx={{ width: 30, height: 30 }}
                                            />
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                                            <div className="flex flex-col cursor-pointer">
                                                <Link
                                                    to="/"
                                                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                                >
                                                    Home
                                                </Link>
                                                {user ? (
                                                    <>
                                                        <div
                                                            onClick={handleLogOut}
                                                            className="px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold cursor-pointer"
                                                        >
                                                            LogOut
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Link
                                                            to="/login"
                                                            className="px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold"
                                                        >
                                                            Login
                                                        </Link>
                                                        <Link
                                                            to="/signUp"
                                                            className="px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold"
                                                        >
                                                            Sign Up
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Stack>
                            </ListItem>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}
