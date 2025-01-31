import Layout from "@/app/components/Layout";

export default function UserProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="py-2 flex justify-center items-center">{children}</div>
    </Layout>
  );
}
