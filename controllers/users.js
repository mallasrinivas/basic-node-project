let users = []

import { v4 as uuidv4 } from 'uuid';

export const getUser = (req,res)=>{
    res.send(users)
  }

export const createUser = (req,res)=>{
    const user = req.body;
    const userDetails = {...user,id:uuidv4()}
    users.push(userDetails)
     res.send(`user is sucessfully added with username ${user.firstName}`)
}

export const findUsers = (req,res)=>{
    const {id} = req.params
    const findUserDetails = users.find((eachUser)=>eachUser.id===id);

    res.send(findUserDetails)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((eachUser)=>eachUser.id!==id);
    res.send(`user with id ${id} is sucessfully deleted`);
    
}
export const updateUser = (req,res)=>{
    const {id}=req.params;
    const {firstName,lastName, age} = req.body;
    const user = users.find((eachUser)=>eachUser.id===id);

    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age
    }    
    res.send(`user with id ${id} is sucessfully updated`);
}