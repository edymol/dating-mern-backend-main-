import React from "react";
import "./SwipeButtons.css";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayCircleFilledIcon fontSize="medium" />
            </IconButton>
            
            <IconButton className="swipeButtons__star">
                <StarBorderTwoToneIcon fontSize="medium" />
            </IconButton> 

            <IconButton className="swipeButtons__lightning">
                <ElectricBoltTwoToneIcon fontSize="medium" />
            </IconButton> 

            <IconButton className="swipeButtons__left">
                <CloseTwoToneIcon fontSize="medium" />
            </IconButton>

            <IconButton className="swipeButtons__right">
                <Favorite fontSize="medium" />
            </IconButton>

        </div>
    )
}

export default SwipeButtons;