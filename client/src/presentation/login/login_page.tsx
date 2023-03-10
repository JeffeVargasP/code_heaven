import { useNavigate } from 'react-router-dom';

import TitleForm from '../shared/components/title';
import InputForm from '../shared/components/input';
import ButtonForm from '../shared/components/button';

export const LoginComponent: React.FC = () => {
    const navigate = useNavigate();
    return(
        <main className='container'>
            <TitleForm
                name="CODE HEAVEN"
            />
            <InputForm
                name="NOME DE USUARIO"
            />
            <InputForm
                name="SENHA"
            />
            <ButtonForm
                name="ENTRAR"
            />
        </main>
    );
}