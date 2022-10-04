import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Telefone: </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Endereço : </b>
        {doctor.address}
      </p>
      <p>
        <b>Preço por consulta : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Horarios : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;