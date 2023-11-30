/* eslint-disable react/prop-types */

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

import { Link, NavLink } from 'react-router-dom';
import { Avatar, CardMedia, Container, MenuItem, Stack } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import "./navbar.css"
import useAdmin from '../../../hooks/useAdmin';
import { useState } from 'react';
const drawerWidth = 240

// eslint-disable-next-line no-unused-vars
export default function Navbar(props) {
    // eslint-disable-next-line no-unused-vars
    const { window } = props;
    const { user, logOut } = useAuth()
    const[isAdmin] = useAdmin()
    const [isOpen, setIsOpen] =useState(false)
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleToggleOpen = () => {
        setIsOpen((prevState) => !prevState); 
    };
    const handleLogOut = () => {
        logOut();
        history.push('/login');
    };
    const handleClose = () => {
        setIsOpen(false); 
    };
    const handleAvatarClick = (event) => {
        event.stopPropagation(); 
        setIsOpen(true); 
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
                        src="https://i.ibb.co/vx37cMR/vector-indian-wedding-invitation-card-template-679930-235.webp"
                        alt="Live from space album cover"
                        title="Shrimp and Chorizo Paella"
                    />
                    <div>
                        <h3 style={{ color: 'green', fontWeight: 'bold' }} >BrideAndGrooms</h3>

                    </div>
                </CardMedia>

            </Typography>
            <Divider />
            <List>
                <NavLink to="/" style={{ color: 'green', fontWeight: 'bold' }} > <MenuItem> Home</MenuItem></NavLink>
                <NavLink to="/biodatas" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Biodatas</MenuItem></NavLink>
                {

                    user && isAdmin && <NavLink to="/dashboard/adminDashboard" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Dashboard</MenuItem></NavLink>
                }
                {

                    user && !isAdmin && <NavLink to="/dashboard/editBiodata" style={{ color: 'green', fontWeight: 'bold' }}><MenuItem>Dashboard</MenuItem></NavLink>
                }
                <NavLink to="/aboutUs" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>About Us</MenuItem></NavLink>
                <NavLink to="/contact" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Contact</MenuItem></NavLink>
                <NavLink to="/signUp" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Logout</MenuItem></NavLink>

            </List>
        </Box>
    );
    return (
        <Box sx={{ display: 'flex', height: '71px' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ height: '70px', backgroundColor: '#FFFFFF', color: '#FFEA00' }}>
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

                            <CardMedia
                                component="div"
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <img
                                    style={{ width: 55, marginRight: 10, borderRadius: '0.575rem', }}
                                    src="https://i.ibb.co/vx37cMR/vector-indian-wedding-invitation-card-template-679930-235.webp"
                                    alt="Live from space album cover"
                                    title="Shrimp and Chorizo Paella"
                                />
                                <div>
                                    <h3 style={{ color: 'green', fontWeight: 'bold' }} >BrideAndGrooms</h3>

                                </div>
                            </CardMedia>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >

                            <ListItem>
                                <NavLink to="/" style={{ color: 'green', fontWeight: 'bold' }} > <MenuItem> Home</MenuItem></NavLink>
                                <NavLink to="/biodatas" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Biodatas</MenuItem></NavLink>
                                {

                                    user && isAdmin && <NavLink to="/dashboard/adminDashboard" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Dashboard</MenuItem></NavLink>
                                }
                                {

                                    user && !isAdmin && <NavLink to="/dashboard/editBiodata" style={{ color: 'green', fontWeight: 'bold' }}><MenuItem>Dashboard</MenuItem></NavLink>
                                }
                                <NavLink to="/aboutUs" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>About Us</MenuItem></NavLink>
                                <NavLink to="/contact" style={{ color: 'green', fontWeight: 'bold' }}> <MenuItem>Contact</MenuItem></NavLink>
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
                                                       <Link to="/login">
                                                       <div
                                                            onClick={handleLogOut}
                                                            className="px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold cursor-pointer"
                                                        >
                                                            LogOut
                                                        </div></Link>
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
