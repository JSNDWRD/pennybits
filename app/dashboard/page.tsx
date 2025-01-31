"use client";
import TransactionTable from "../components/TransactionTable";
import Cashflow from "../components/Cashflow";
import { useEffect, useState } from "react";
import { ITransaction } from "../../lib/interface";
import { fetchTransactions } from "../../lib/transaction";

export default function Page() {
  const date = new Date(Date.now()).toDateString().split(" ");
  const dateText = `${date[0]}, ${date.slice(1).join(" ")}`;

  const [transact, setTransact] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions
  const fetchData = async () => {
    const data = await fetchTransactions();
    setTransact(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTransaction = async (id: string) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_CONNECTION_URL}/api/transactions/${id}`,
      {
        method: "DELETE",
      },
    );
    fetchData();
  };

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="rounded-md text-3xl font-medium">Dashboard</h1>
        <p>{dateText}</p>
      </div>
      <div>
        <Cashflow transact={transact} />
      </div>

      <div>
        <TransactionTable
          transact={transact}
          deleteTransaction={deleteTransaction}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
}
