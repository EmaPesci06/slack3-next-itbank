"use client"

import { useState } from 'react';
import { FormCuentas } from './FormCuentas';
import { TableCuentas } from './TableCuentas';
import { getAccounts } from '@/data/accounts';

export const Cuentas = () => {
    const fetchedAccounts = getAccounts();
    const [accounts, setAccounts] = useState([]);

    const addAccount = (newAccount) => {
        setAccounts([...accounts, newAccount]);
    };

    return (
        <main className="main">
            <div className="containerCuenta w-xl">
                <TableCuentas accounts={fetchedAccounts} />
                <FormCuentas addAccount={addAccount} />
            </div>

            <ul>
                {accounts.map((account) => (
                    <li key={account.numeroCuenta}>
                        <Link href={`/cuentas/${account.numeroCuenta}`}>
                            <a>{account.numeroCuenta}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
