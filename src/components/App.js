import React , { Component } from 'react'
import {add_Reminder,clear_Reminder,remove_Reminder} from '../actions'
import moment from 'moment'
import {connect } from 'react-redux'
import DatePicker from "react-datepicker";
import logo from '../reminder.png'
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
    state ={
        text: '',
        date: new Date()
    }

    render_Reminders=()=>{
        const {reminders} = this.props;
        return(
            <ul className="list-groups">{
                reminders.map(reminder=>{
                    return(
                        <li key={reminder.id}className='list-group-items'>
                            <div>{reminder.text}</div>
                            <div>{moment(new Date(reminder.date)).fromNow()}</div>
                            <div className="closeIcon remove btn btn-danger" onClick={()=> this.props.remove_Reminder(reminder.id)}>X</div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        console.log(this.props)
        return(
        <div className="App">
            <img src = {logo}/>
            <div className="reminder-title">
                <h2>Calender</h2>
            </div>
            <input className="form-control"
            type="text" 
            value={this.state.text}
            placeholder ="Plans"
            onChange={(e)=>this.setState({text:e.target.value})}/>
            <DatePicker 
            className="form-control"
            value={this.state.date}
            placeholderText="Enter Date"
            selected={this.state.date}
            onChange={(date)=>{this.setState({date})}}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"/>
            <div className="d-grid">
                <button onClick={()=>{this.props.add_Reminder(this.state.text,this.state.date)
                    this.setState({text :'', date:''})
                }}
                className="btn btn-primary" 
                size="lg">Add Reminder</button>
                {this.render_Reminders()}
                <button onClick={ () => this.props.clear_Reminder()}className="btn btn-danger " 
                size="lg">Clear reminder</button>
            </div>
        </div>  
        )
    }
}


export default connect(state =>{
return {
    reminders: state
}
},{add_Reminder,remove_Reminder,clear_Reminder})(App)