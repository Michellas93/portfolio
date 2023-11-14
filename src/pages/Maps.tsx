import { Section } from "../components/Section";
import maps from "../assets/web-3120321_1280.png";
import { useState } from "react";

export const Maps = () => {
	const [validace, setValidace] = useState("");
	const [error, setError] = useState("");

	const validateHandler = (value: string) => {
		if (/^[a-zA-Z0-9áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ ]+$/.test(value)) {
			setError("");
			return true;
		} else {
			setError(" * Napiště prosím název lokality");
			return false;
		}
	};
	function handlerOnChange(event: {
		target: {
			value: string;
		};
	}) {
		setValidace(event.target.value);
		validateHandler(event.target.value);
	}

	return (
		<div>
			<Section title="Mapy" type="light">
				<div>
					<label className="block text-sm font-medium leading-6 text-center text-slate-600">
						Vyberte lokaci
					</label>
					<div className="flex justify-center">
						<div className="relative mt-2 rounded-md flex  ">
							<div>
								<input
									type="text"
									name="location"
									id="location"
									value={validace}
									className="block w-full border-2 border-darkGreen  rounded-md py-1.5 pl-7 pr-20 text-slate-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo sm:text-sm sm:leading-6"
									placeholder="Lokalita"
									onChange={handlerOnChange}
								/>
								{error && (
									<div className="text-orange-900 text-xs mt-2">{error}</div>
								)}
							</div>
							<div>
								<select
									id="area"
									name="area"
									className="rounded-md  border-2 border-darkGreen  w-24 h-10 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
								>
									<option>Praha-1</option>
									<option>Praha-2</option>
									<option>Praha-3</option>
									<option>Praha-4</option>
									<option>Praha-5</option>
									<option>Praha-6</option>
									<option>Praha-7</option>
									<option>Praha-8</option>
									<option>Praha-9</option>
									<option>Praha-10</option>
									<option>Praha-11</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<img className="max-w-3xl" src={maps} />
				</div>
			</Section>
		</div>
	);
};
