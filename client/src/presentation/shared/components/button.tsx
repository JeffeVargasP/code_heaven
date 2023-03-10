import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import '../style/button.css'

function ButtonForm(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return(
        <button>
            {props.name}
        </button>
    );
}

 export default ButtonForm;