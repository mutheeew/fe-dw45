import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {useQuery, useMutation} from 'react-query';
import {API} from '../config/api';
import DeleteData from "./modals/DeleteData";
import Swal from 'sweetalert2'
import { UserContext } from "../context/user";

const Card = ({id, title, year, imageUrl}) => {
  const [state] = useContext(UserContext)
  const deleteById = useMutation(async (id) => {
    try{
     
          await API.delete(`/film/${id}`);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
      
    } catch (error){
      console.log(error);
      // console.log("ini id mute error: ", id)
    }
  });

  return (
    <div>
      <Link to={`/play/${id}`} style={{ textDecoration: "none" }}>
        <div className="bg-black px-2">
          <img src={imageUrl} alt="Card" />
            <div className="text-white" >{title}</div>
            <p className="text-secondary">{year}</p>
            </div>
        {state.isLogin && state.user.role==='admin' &&(
        <div>
          <button onClick={() => {deleteById.mutate(id);}} className="btn btn-danger px-3" >Delete</button>
        </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
