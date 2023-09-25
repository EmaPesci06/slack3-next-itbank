"use client"

import { useState } from 'react';
import { FormCuentas } from './FormCuentas';
import { TableCuentas } from './TableCuentas';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CuentasComponent() {
    const [accounts, setAccounts] = useState([]);


    const addAccount = (newAccount) => {
        setAccounts([...accounts, newAccount]);
    };

    return (
        <main className="main">
            <div className="containerCuenta w-xl">
                <TableCuentas accounts={accounts} />
                <FormCuentas addAccount={addAccount} />
                <div style={{ display: "inline-flex", margin: "12px auto" }}>
                    <Link href={'/cuentas/banco'} style={{ marginTop: "20px", color: "#ccc", display: "block", backgroundColor: "#12d", width: "fit-content", padding: "20px" }}>Ir a cuentas bancarias</Link>
                    <Link href={'/cuentas/tarjetas'} style={{ marginTop: "20px", marginLeft: "20px", color: "#ccc", display: "block", backgroundColor: "#12d", width: "fit-content", padding: "20px" }}>Ir a tarjetas asociadas</Link>
                </div>
            </div>
        </main>
    );
};
