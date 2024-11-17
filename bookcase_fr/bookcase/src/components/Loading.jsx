import React from 'react'
import { useSelector } from 'react-redux'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Loading() {

    const { loading } = useSelector((store) => store.book)

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Loading
