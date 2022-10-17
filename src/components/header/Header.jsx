import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faCartShopping, faPerson, faPlaneDeparture, faTree} from "@fortawesome/free-solid-svg-icons";
import {Button, Stack, TextField} from "@mui/material";
import * as React from 'react';
import dayjs from 'dayjs';
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const Header = () => {

    const [value, setValue] = React.useState(dayjs(new Date()));
    const [options, setOptions] = React.useState ({
        adult: 1,
        children: 0,
    })
    return (
        <div className="header">
            <div className={"headerContainer"}>
                <div className={"headerList"}>
                    <div className={"headerListItem active"}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <span>Bookings</span>
                    </div>
                </div>
                <h1 className={"headerTitle"}>Welcome To Flight Booking and Management System</h1>
                <p className={"headerDesc"}>Get rewarded for your travel. Travel to your dream destination at 10%
                    discount on your first flight <FontAwesomeIcon icon={faTree}/></p>
                <Button variant="contained">Sign In / Register</Button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPlaneDeparture} className={"headerIcon"}/>
                        <span>
                            <input type={"text"} placeholder={"Going to?"} className={"headerSearchInput"}></input>
                        </span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDay} className={"headerIcon"}/>
                        <span>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        label="Departure Date"
                                        value={value}
                                        minDate={dayjs('2017-01-01')}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className={"headerIcon"}/>
                        <span className={"headerSearchText"}>
                            {`${options.adult} adult . ${options.children} children`}

                        </span>
                    </div>
                    <Button variant="contained">Search</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;