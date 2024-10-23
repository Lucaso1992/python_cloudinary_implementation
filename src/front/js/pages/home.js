import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Uploader } from "../component/uploader.jsx";

export const Home = () => {
	const [file, setFile] = useState("");

	const handleImg = (evento) => {
		console.log(evento.target.files);
		if (evento.target.files.length)
			setFile(evento.target.files[0]);
	}

	const enviarImagen = () => {

	}
	return (
		<div className="text-center w-50 mt-5 row bg-secondary bg-opacity-10 m-auto">
			<div className="col d-flex flex-column gap-4">
				<h1>CLOUDINARY</h1>
				<input type="file" onChange={(e) => handleImg(e)} />
				<button className="btn btn-primary w-25 m-auto mb-3" onClick={enviarImagen}>Enviar</button>
			</div>
		</div>
	);
};
