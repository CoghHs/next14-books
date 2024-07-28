export default function AboutUsLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; The New York Times Best Seller Explorer
    </div>
  );
}
