import { useEffect, useState } from "react";
import styles from './styles/Dados.module.css';
import axios from 'axios';

export default function App() {
    const [pessoa, setpessoa] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const fetchJson = async () => {
            try {
                const responseJson = await axios.get('http://localhost:5000/alunos');
                setpessoa(responseJson.data);
            } catch (error) {
                alert('Error!', error.message);
            }
        };
        fetchJson();
    }, []);

    const carregar_dados = () => {
        setShowList(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Pessoas</h1>
            <button className={styles.button} onClick={carregar_dados}>Pesquisar</button>
            {
                showList && (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>R.A</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Educacenso</th>
                                <th className={styles.th}>Data de Nascimento</th>
                                <th className={styles.th}>Idade</th>
                                <th className={styles.th}>CPF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pessoa.map((pessoa, index) => (
                                <tr className={styles.client} key={index}>
                                    <td className={styles.td}>{pessoa.ra}</td>
                                    <td className={styles.td}>{pessoa.nome}</td>
                                    <td className={styles.td}>{pessoa.educacenso}</td>
                                    <td className={styles.td}>{pessoa.niver}</td>
                                    <td className={styles.td}>{pessoa.idade}</td>
                                    <td className={styles.td}>{pessoa.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}
