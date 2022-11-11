import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {

	const [inputValue, setinputValue] = useState("")
	const [tasks, setTasks] = useState([])

	const handleAdd = (e) =>{
		
		if(e.key == "Enter"){
			if(inputValue != ""){
				setTasks([...tasks, inputValue])
				setinputValue("")
			}
			else{
				alert("No puede estar vacio")
			}
		}
	}

	const handleAddClick = () =>{
		
		if(inputValue != ""){
			setTasks([...tasks, inputValue])
			setinputValue("")
		}
		else{
				alert("No puede estar vacio")
		}
	}

	const handleDelete = (currentIndex)=>{
		let newTasks = tasks.filter((task,index)=>index != currentIndex)
		setTasks(newTasks)
	}

	const handleClick = (e)=>{
		console.log(e);
		if(e.target.style.textDecoration){
			e.target.style.removeProperty('text-decoration')
		}
		else{
			e.target.style.setProperty('text-decoration', 'line-through')
		}
	}

	return (
		<div className="row container">
			<div className="title">To-Do List</div>
			<div className="col list">
				<input className="bar"
					onChange={(e)=>setinputValue(e.target.value)} 
					value={inputValue} 
					onKeyDown={handleAdd} 
					type="text"
					placeholder="Add new..."
				/>
				<button className="addBtn" onClick={handleAddClick}>+</button>
			</div>

			<ListGroup className="col-12">
				{
					tasks.map((task,index)=>{
						return(
							<ListGroup.Item className="list todoTasks" key={index}>
								<label className="icon " htmlFor={`text${index}`} ><FontAwesomeIcon icon= {faCircleCheck} /></label>
								<p className= "task col" id= {`text${index}`} onClick={handleClick} >  
									{task}
								</p>
								<button className="btn" onClick={(e)=>handleDelete(index)}>
									<p className="col"><FontAwesomeIcon icon= {faXmark} /></p>
								</button>
							</ListGroup.Item>

						)})

				}					
			</ListGroup>
		</div>  
	);
};

export default Home;
