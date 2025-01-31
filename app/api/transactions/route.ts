import { NextRequest, NextResponse } from "next/server.js";
import connectDB from "../../../lib/db.js";
import Transaction from "../model/Transaction.model.js";

connectDB();
export async function GET() {
  const transactions = await Transaction.find({});
  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newTransaction = new Transaction(data);

  await newTransaction.save();

  return NextResponse.json(newTransaction);
}
