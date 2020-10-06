// externals
import React, { useEffect, useState, useContext } from "react";
import moment, { isMoment } from "moment";
import ReactDOM from "react-dom";
import Tabs, { TabPane } from "rc-tabs";
//import SingleDatePicker from "react-dates/lib/components/SingleDatePicker";

import DatePicker from "react-datepicker";
import "react-dates/lib/css/_datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import AppContext from "../../services/context";
// components

import SeatPlan from "./SeatPlan";

import ReactModal from "react-modal";
import { Button } from "reactstrap";
import Examples from "../../../../src/views/IndexSections/Examples";
import { set } from "lodash";
// helpers/api/constants/config

const Seats = props => {
    const store = useContext(AppContext);
    const {
        handleGetLibrarySeat,
        handleDateChange,
        handleBookindSeats,
        onTimeChange,
        onTimeToChange
    } = store.methods;
    const { rowsSeats, bookingDay, pososto_pl,Bookingfind,from_hour,to_hour,isLoggein } = store.state;
    const { orofos } = props;
    const [currentPassenger, setcurrentPassenger] = useState(0);
    const [passengersPlans, setpassengersPlans] = useState([]);
    const [rowsSeat, setrowsSeats] = useState([]);
    useEffect(() => {
        setrowsSeats(rowsSeats);
      }, [rowsSeats]);
    const isDayBlocked = day => {
        //  if (Settings.role === "b2c") {
        return false;
        // } else {
        /*   if (!selectOnlyDirectRoutes) return false
  
        return focused === "startDate"
          ?travelToEligibleDates && !getcurrent(travelToEligibleDates).some(date => moment(day).isSame(date, "day"))
          : travelFromEligibleDates && !getcurrent(travelFromEligibleDates).some(date =>
              moment(day).isSame(date, "day")
            );
      } */
    };

    const handleAddSeatPlan = number => {
        console.log("We add a Passenger: " + { number });
        let $c = currentPassenger;
        $c = $c + 1;
        let $add = $c;
        setcurrentPassenger($add);
        let $pasplan = passengersPlans;
        $pasplan.push({ number });
        let $pas = $pasplan.filter(element => element && element.number);
        console.log($pasplan);

        setpassengersPlans($pas);
    };

    const handlRemoveSeatPlan = number => {
        console.log("We premove a passenger: " + { number });
        let $c = currentPassenger;
        $c = $c - 1;
        let $remove = $c;
        setcurrentPassenger($remove);
        let $pasplan = passengersPlans;
        let $pas = $pasplan.filter(
            element =>
                element.number &&
                JSON.stringify(element.number) !== JSON.stringify(number)
        );
        setpassengersPlans($pas);
    };

    return (
       
        <div>
            <span>
                <button
                    type="button"
                    className="btn-round"
                    color="primary"
                    size="lg"
                    onClick={() => {
                        orofos ? handleGetLibrarySeat(orofos) : null;
                    }}
                >
                   Εμφάνιση Θέσεων
                </button>
                {(bookingDay && passengersPlans && passengersPlans[0]) && isLoggein ? (
                    <button
                        type="button"
                        className="btn-round"
                        color="primary"
                        size="lg"
                        onClick={() => {
                            orofos
                                ? handleBookindSeats(
                                      passengersPlans,
                                      moment(bookingDay).format("YYYY-MM-DD")
                                  )
                                : null;
                        }}
                    >
                        Κράτηση Θέσεων
                    </button>
                ):<div>Πρέπει να συνδεθείτε για να κάνετε κράτηση</div>}
            </span>
            {rowsSeats &&
                rowsSeats[orofos] &&
                (
                    <div>
                      {pososto_pl} 
                      
                    </div>
                ) }
            {rowsSeat && rowsSeat[orofos] && (
                <SeatPlan
                    rows={rowsSeat[orofos]}
                    handleAddSeatPlan={handleAddSeatPlan}
                    handlRemoveSeatPlan={handlRemoveSeatPlan}
                    numberOfPassengersPlannings={2}
                />
            )}
          
        
                <DatePicker
                    selected={bookingDay}
                    onChange={date => handleDateChange(date)}
                />
          
           
                
                <TimePicker onChange={time => onTimeChange(time)} value={from_hour}  />
        
           
           
                <TimePicker onChange={time => onTimeToChange(time) } value={to_hour} />
                <div>Επιλέξτε Ημερομηνία και Ώρα από-προς</div>
        </div>
    );
};
export default Seats;
