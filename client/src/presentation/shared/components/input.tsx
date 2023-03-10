import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import '../style/input.css'

function InputForm(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return(
        <main className='container'>
            <label htmlFor="">{props.name}</label>
            <input type="text" />
        </main>
    );
}

 export default InputForm;