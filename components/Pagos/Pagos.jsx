"use client"

import React, { useState } from "react";
import { PaymentForm } from "./PaymentForm";
import { PaymentGrid } from "./PaymentGrid";
import { useRouter } from "next/navigation";

export const Pagos = () => {
  const [payments, setPayments] = useState([]);

  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]);
  };

  const router = useRouter()

  return (
    <>
      <main className="main mainPago">
        <h2 className="text-center">Historial de Pagos</h2>

        <PaymentGrid payments={payments}></PaymentGrid>
        <PaymentForm addPayment={addPayment}></PaymentForm>

        <button type="button" onClick={() => router.push('/pagos/factura')}>Ver Facturas</button>
      </main>
    </>
  );
};
