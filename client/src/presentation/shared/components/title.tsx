import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import '../style/title.css'

function TitleForm(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return(
        <h1>{props.name}</h1>
    );
}

 export default TitleForm;