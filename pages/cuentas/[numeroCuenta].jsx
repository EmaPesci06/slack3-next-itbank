import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
    const accounts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'components', 'cuentas', 'accounts.json'), 'utf-8'));
    const paths = accounts.map((account) => ({
        params: { numeroCuenta: account.numeroCuenta },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const accounts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'components', 'cuentas', 'accounts.json'), 'utf-8'));
    const account = accounts.find((account) => account.numeroCuenta === params.numeroCuenta);

    return { props: { account } };
}

export default function AccountPage({ account }) {
    return (
        <>
            <h1>Cuenta</h1>
            <h2>Numero: {account.numeroCuenta}</h2>
            <h2>Titular: {account.titularCuenta}</h2>
            <h2>Saldo: {account.saldo}</h2>
            <h2>Tipo: {account.tipoCuenta}</h2>
        </>
    )
}
