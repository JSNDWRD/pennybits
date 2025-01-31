import { ITransaction } from "./interface";

export async function fetchTransactions(): Promise<ITransaction[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONNECTION_URL}/api/transactions`,
  );
  const data: ITransaction[] = await res.json();
  return data;
}
