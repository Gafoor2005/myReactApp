import React from 'react'
import Header from './Components/Header'
import { Link } from 'react-router-dom'

function UpTsList(name,time,players,id){
	return(
		<div>
			<h1>upcoming Tournaments</h1>
			<div>
				<div className="name">{name}</div>
				<div className="time">{time}</div>
				<div className="players">{players}</div>
				<Link to={'./'+id} >see more</Link>
			</div>
		</div>
	)
}

function Tournaments() {
  	return (
		<div>
			<Header />
			<div className="main">
				<div className="upcomingTS">
                    {UpTsList("new tornament","12am","50 players","1001")}
				</div>
			</div>
		</div>
  	)
}

export default Tournaments