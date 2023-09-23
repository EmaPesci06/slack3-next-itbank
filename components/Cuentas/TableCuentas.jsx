import Link from 'next/link'
import { getAccounts } from '@/data/accounts';

export const TableCuentas = ({ accounts }) => {


    return (
        <table className="table table-hover" id="table">
            <thead className="table-dark">
                <tr>
                    <th>Número de Cuenta</th>
                    <th>Titular de la Cuenta</th>
                    <th>Saldo</th>
                    <th>Tipo de Cuenta</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account, index) => (
                    <Link href={`/cuentas/${account.numeroCuenta}`} key={index}>
                        <tr>
                            <td>{account.numeroCuenta}</td>
                            <td>{account.titularCuenta}</td>
                            <td>{account.saldo}</td>
                            <td>{account.tipoCuenta}</td>
                        </tr>
                    </Link>
                ))}
            </tbody>
        </table>
    );
};
