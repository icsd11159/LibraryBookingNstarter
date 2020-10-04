import React, {Component} from 'react'
//import AppContext from "../../../../services/context";
import SeatPicker from 'react-seat-picker'
import style from "../../style/main.scss";
import Seatmap from "./Seatmap"
 
export default class SeatPlan extends Component {

  
  state = {
    loading: false,
    rows : this.props.rows,
   // plan: this.props.planAccomodation,
    numberOfPassengersPlannings: this.props.numberOfPassengersPlannings,
   // passengerPlanning: this.props.passengerPlanning
  }
  
 
  addSeatCallback = ( row, number) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(`Added seat ${number}, row ${row}`)
     // this.state.currentPassenger++;

      //ta apothikevw se ena object
      //kalw to showButton gia na kanei if
      const newTooltip = `Selected id-${number}`
      //addCb(row, number, id, newTooltip)
      this.setState({ loading: false })
      let handleAddSeatPlan  =   this.props.handleAddSeatPlan;
      return(handleAddSeatPlan({number}));
    })
  }
 
  addSeatCallbackContinousCase = ( row, number ) => {
    this.setState({
      loading: true
    }, async () => {
      if (removeCb) {
        await new Promise(resolve => setTimeout(resolve, 750))
        console.log(`Removed seat ${params.number}, row ${params.row}`)
      //  removeCb(params.row, params.number)
      }
      await new Promise(resolve => setTimeout(resolve, 750))
      console.log(`Added seat ${number}, row ${row}`)
      const newTooltip = `tooltip for id-${number} added by callback`
     // addCb(row, number, id, newTooltip)
      this.setState({ loading: false })
    })
  }
 
  removeSeatCallback = ( row, number ) => {
    this.setState({
      loading: true
    }, async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(`Removed seat ${number}, row ${row}`)
     // this.state.currentPassenger--;
      // A value of null will reset the tooltip to the original while '' will hide the tooltip
      const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
     // removeCb(row, number, newTooltip)
      this.setState({ loading: false })
      let handlRemoveSeatPlan  =   this.props.handlRemoveSeatPlan;
      return(handlRemoveSeatPlan({number}));
    })
  }
 
  render() {
    //console.log("plan");
   // console.log(this.state.plan);
   
 
 /*   let rows = [
    [{ number: 1 }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2, isReserved: true}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3, isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6, isReserved: true}]
]; */
    let {loading} = this.state
    
    return (
      <div>  
        <div style={{marginTop: '30px'}}>
        <Seatmap 
        addSeatCallback={this.addSeatCallback}
        removeSeatCallback={this.removeSeatCallback}
        rows={this.state.rows} 
        maxReservableSeats={this.state.numberOfPassengersPlannings} 
        alpha={false} 
        />
        </div>
      
       {/*  <div style={{ marginTop: '50px' }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div> */}


      </div>
    )
  }
}
