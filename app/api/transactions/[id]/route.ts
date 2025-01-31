import { NextRequest, NextResponse } from "next/server.js";
import connectDB from "../../../../lib/db.js";
import Transaction from "../../model/Transaction.model.js";

connectDB();

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const deleteTransaction = await Transaction.findByIdAndDelete(id);
  return NextResponse.json(deleteTransaction);
}
