import React, { useState } from 'react';
import "../css/Header.css";
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElBook, setAnchorElBook] = useState(null);
    const open = Boolean(anchorEl);
    const openBook = Boolean(anchorElBook);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickBook = (event) => {
        setAnchorElBook(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseBook = () => {
        setAnchorElBook(null);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: theme ? '#333' : '#f5f5f5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderBottom: theme ? '1px solid #444' : '1px solid #ddd'
        }}>
            <div onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                <p className='logo-text' style={{ fontSize: '24px', fontWeight: 'bold', color: theme ? '#fff' : '#333' }}>
                    UG Company
                </p>
            </div>

            <div style={{ position: 'relative' }}>
                <Button
                    sx={{
                        color: theme ? '#fff' : '#333',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    onClick={handleClick}
                >
                    Author
                    <ArrowDropDownIcon style={{ marginLeft: '8px', color: theme ? '#fff' : '#333' }} />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    PaperProps={{
                        style: {
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundColor: theme ? '#333' : '#fff'
                        }
                    }}
                >
                    <MenuItem onClick={() => { handleClose(); navigate("/all-authors"); }}>
                        All Authors
                    </MenuItem>
                    <MenuItem onClick={() => { handleClose(); navigate("/new-add-author"); }}>
                        New Add Author
                    </MenuItem>
                </Menu>


            </div>
            <div style={{ position: 'relative' }}>
                <Button
                    sx={{
                        color: theme ? '#fff' : '#333',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    onClick={handleClickBook}
                >
                    Book
                    <ArrowDropDownIcon style={{ marginLeft: '8px', color: theme ? '#fff' : '#333' }} />
                </Button>
                <Menu
                    anchorEl={anchorElBook}
                    open={openBook}
                    onClose={handleCloseBook}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    PaperProps={{
                        style: {
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundColor: theme ? '#333' : '#fff'
                        }
                    }}
                >
                    <MenuItem onClick={() => { handleCloseBook(); navigate("/all-book"); }}>
                        All Book
                    </MenuItem>
                    <MenuItem onClick={() => { handleCloseBook(); navigate("/new-add-book"); }}>
                        New Add Book
                    </MenuItem>
                </Menu>


            </div>


            <div className='flex-row' style={{ alignItems: 'center' }}>
                <input
                    className='search-input'
                    placeholder='Bir Şeyler Ara'
                    style={{
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: theme ? '1px solid #555' : '1px solid #ccc',
                        outline: 'none',
                        width: '200px',
                        marginRight: '10px',
                        backgroundColor: theme ? '#555' : '#fff',
                        color: theme ? '#fff' : '#333'
                    }}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {theme ? <FiMoon className='icon' onClick={changeTheme} style={{ cursor: 'pointer', marginRight: '15px', color: '#fff' }} /> : <CiLight className='icon' onClick={changeTheme} style={{ cursor: 'pointer', marginRight: '15px', color: '#333' }} />}

                    <Badge color="error" badgeContent={2} overlap="circular">
                        <CiShoppingBasket style={{ marginRight: '5px', cursor: 'pointer', color: theme ? '#fff' : '#333' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Header;
