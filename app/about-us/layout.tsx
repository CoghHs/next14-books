export default function AboutUsLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next Js is great!
    </div>
  );
}
