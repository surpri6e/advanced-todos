import React from 'react'
import { AlertContext } from '../context/alert/alertContext';
import { LoginContext } from '../context/login/loginContext';
import {ILoginData} from '../context/login/loginTypes'
import { validateEmail } from '../utils/validateEmail';

const LoginAndAuth = () => {

    const {checkAuth, registration, authorizate} = React.useContext(LoginContext);
    const alert = React.useContext(AlertContext);
    const [logOrReg, setLogOrReg] = React.useState<boolean>(false);

    const [data, setData] = React.useState<ILoginData>({email: '', password: ''});
    const [secondPass, setSecondPass] = React.useState<string>('');

    if(alert === undefined) {
        throw new Error("context");
    }

    const auth = (ev: React.FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        ev.stopPropagation();

        checkAuth('', '', data.email).then(res => {
            console.log(res);
            let flag: boolean;
            flag = res.data === null ? true : false;
            console.log(flag);

            if(flag) {
                setData({email: '', password: ''});
                setSecondPass('');
                return alert.show('Такого аккаунта не существует', 'warning');
            }

            const result = res.data[Object.keys(res.data)[0]];

            

            if(result.email === data.email && result.pass === data.password) {
                authorizate(data.password, data.email);
                alert.show('Вы авторизованы', 'success')
            } else {
                alert.show('Неверный логин или пароль', 'danger');
            }
        });
    }

    const reg = (ev: React.FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        ev.stopPropagation();

        if(!validateEmail(data.email)) {
            setData({email: '', password: ''});
            setSecondPass('');
            return alert.show('Введите коректный email', 'danger');
        }
        if(!(data.password.length > 5)) {
            setData({email: '', password: ''});
            setSecondPass('');
            return alert.show('Пароль должен быть длиной от 6 до 32 символов', 'danger');
        }
        if(!(data.password.length < 33)) {
            setData({email: '', password: ''});
            setSecondPass('');
            return alert.show('Пароль должен быть длиной от 6 до 32 символов', 'danger');
        }
        if(data.password !== secondPass) {
            setData({email: '', password: ''});
            setSecondPass('');
            return alert.show('Нужно подтвредить пароль!', 'danger');
        }
        checkAuth('', '', data.email).then(async res => {
            console.log(res);
            let flag: boolean;
            flag = res.data === null ? true : false;
            console.log(flag);

            if(!flag) {
                setData({email: '', password: ''});
                setSecondPass('');
                return alert.show('На эту почту уже зарагестрированы', 'warning');
            }
            await registration(data.password, data.email);

            setData({email: '', password: ''});
            setSecondPass('');

            alert.show('Вы зарегестрированы', 'success') 

            await authorizate(data.password, data.email);
        })
    }

  return (
    <div>
        <h1 className='display-4 fw-bold text-decoration-underline mb-5'>{logOrReg ? 'Authorizate' : 'Registration'}</h1>
        <div className='d-flex mb-2 justify-content-end'>
            <a href='#' className="link-secondary" onClick={() => setLogOrReg((prev) => {
                setData({email: '', password: ''});
                setSecondPass('');
                return !prev;
            })}>{logOrReg ? 'First time?' : 'Authorizate'}</a>
        </div>
        <form>
        {
            logOrReg
            ?
            <div className='form-group'>
                <input type="email" value={data.email} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setData({...data, email: ev.target.value})} className="form-control" id="exampleInputEmail1" placeholder='E-mail'/>
                <input type="password" value={data.password} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setData({...data, password: ev.target.value})} className="form-control mt-2" id="exampleInputEmail1" placeholder='Password'/>
                <div className="btn-group mt-4 d-flex" role="group">
                    <button type="submit" className="btn btn-warning" onClick={auth}>Авторизоваться</button>
                </div>
            </div>
            :
            <div className='form-group'>
                <input type="email" value={data.email} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setData({...data, email: ev.target.value})} className="form-control" id="exampleInputEmail1" placeholder='Введите ваш e-mail'/>
                <input type="password" value={data.password} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setData({...data, password: ev.target.value})} className="form-control mt-2" id="exampleInputEmail1" placeholder='Создайте пароль'/>
                <input type="password" value={secondPass} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setSecondPass(ev.target.value)} className="form-control mt-2" id="exampleInputEmail1" placeholder='Подтвердите пароль'/>
                <div className="btn-group mt-4 d-flex" role="group">
                    <button type="submit" className="btn btn-warning" onClick={reg}>Создать аккаунт</button>
                </div>
            </div>
        }
        </form>
    </div>
  )
}

export default LoginAndAuth