import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import "./navbar.css";
import { Title } from "../components/Title";
import mapa from "../assets/mapa.jpg";
import { BlogCards } from "../components/BlogCards";
import strava from "../assets/granule.jpg";
import pohyb from "../assets/mapadog.jpg";
import denik from "../assets/diar.jpg";
import { ButtonLink } from "../components/ButtonLink";
import Navbar from "../components/Navbar";

export const Root = () => {
	return (
		<>
			<div id="sidebar">
				<nav className="navbar py-2 rounded-xl mt-5 mx-2 bg-darkGreen">
					<div className="flex justify-between pl-4 pr-4 ">
						<Logo />
						<Navbar />
						<ButtonLink link="" />
					</div>
				</nav>
				<Header
					header="Pet Heart"
					headerParagraph="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  "
				/>
				<div className="bg-backgroundLight">
					<Title title="Mapy" />
					<div className="flex items-center space-x-2.5 ml-8 mr-8  ">
						<p className="px-1 leading-7  text-slate-600">
							Hledáte ideální místo pro venčení vašeho čtyřnohého přítele v
							Praze? Máme pro vás skvělou zprávu! Představujeme „Naši mapu“ –
							vaši jedničku pro nalezení perfektního místa pro venčení psů ve
							vašem okolí.{" "}
						</p>
						<img className="w-1/3 rounded-md" src={mapa} alt="mapa" />
					</div>
					<div className="flex justify-center pb-5 ">
						<Button
							onClick={(event) => console.log("klik", event)}
							type="secondary"
						>
							Více
						</Button>
					</div>
				</div>
				<div className="">
					<Title title="Blog" />
					<div className="flex justify-around w-full">
						<div className=" ml-2 mr-2 ">
							<img
								className=" w-60   object-cover h-52 rounded-md"
								src={strava}
								alt="granule"
							/>
							<BlogCards
								h3="Strava"
								text="Kvalitní psí krmivo by mělo obsahovat vyvážený poměr bílkovin, tuků, sacharidů, vitamínů a minerálů, které odpovídají věku, plemeni, velikosti a úrovni aktivity psa..."
							/>
							<div className="flex justify-center pb-5 mt-2  ">
								<Button
									onClick={(event) => console.log("klik", event)}
									type="secondary"
								>
									Více
								</Button>
							</div>
						</div>
						<div className=" ml-2 mr-2">
							<img
								className=" w-60 object-cover  h-52 rounded-md"
								src={pohyb}
								alt="pes"
							/>
							<BlogCards
								h3="Pohyb"
								text=" Je důležité nabídnout psům různorodé možnosti, jak vyčerpat jejich energii a udržet je aktivní..."
							/>
							<div className="flex justify-center pb-5  mt-2 ">
								<Button
									onClick={(event) => console.log("klik", event)}
									type="secondary"
								>
									Více
								</Button>
							</div>
						</div>
						<div
							className="  ml-2 mr-2
					"
						>
							<img
								className="  w-60  object-cover  h-52 rounded-md"
								src={denik}
								alt="denik"
							/>
							<BlogCards
								h3="Deník"
								text=" Prozkoumejte svět očima našeho čtyřnohého přítele díky tomuto jedinečnému deníku psa... "
							/>
							<div className="flex justify-center pb-5 mt-2 ">
								<Button
									onClick={(event) => console.log("klik", event)}
									type="secondary"
								>
									Více
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
};
