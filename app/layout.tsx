import 'styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
