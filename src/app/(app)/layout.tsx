export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-4 sm:p-6 lg:p-8 pt-20">{children}</div>;
}
