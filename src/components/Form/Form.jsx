import React from 'react';
import './Form.css'

const Form = () => {
    const [server, setServer] = useState('');
    const [uid, setUid] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeServer = (e) => {
        setServer(e.target.value)
    }

    const onChangeUid = (e) => {
        setUid(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={'Сервер'} value={server} onChange={onChangeServer}/>
            <input className={'input'} type="text" placeholder={'UID'} value={uid} onChange={onChangeUid}/>
            <select className={'subject'} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Покупатель</option>
                <option value={'legal'}>Гость</option>
            </select>
            Form
        </div>
    );
};

export default Form;
