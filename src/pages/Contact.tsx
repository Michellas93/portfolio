import { useParams } from "react-router-dom";

export const Contact = () => {
	const { contactId } = useParams();
	return <div>tohle je kontakt {contactId}</div>;
};
