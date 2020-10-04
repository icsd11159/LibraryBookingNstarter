import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';


export default class Seat extends React.Component {
  
    static propTypes = {
        isSelected: PropTypes.bool,
        isReserved: PropTypes.bool,
        table : PropTypes.bool,
        orientation: PropTypes.bool,
        seatNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        selectSeat: PropTypes.func.isRequired,
        tooltip: PropTypes.string
       
    };

    static defaultProps = {
        isSelected: false
    };

    handleClick = () => {
        !this.props.isReserved && this.props.selectSeat();
    }

    render() {
        const { isSelected, isEnabled, isReserved, table, orientation ,tooltip} = this.props;
        let className
        if(!table){
         className =
        "Seat" +
        (isSelected ? " Seat--selected" : "") +
        (!isSelected && isEnabled && !isReserved ? " Seat--enabled" : "") +
        (isReserved ? " Seat--reserved" : "") +
        ` Seat--${orientation && orientation==true ? "south" : "north"}`;
        }else{
            className=  "Seat--table"
        }
        return (
            <div  className={className} onClick={this.handleClick}>
                <span title={tooltip?tooltip:null} className="SeatNumber">{this.props.seatNumber}</span>
            </div>
        );
    };
}
