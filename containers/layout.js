import Nav from '../components/nav';

export default function Layout({ children, title }) {
  return (
    <>
      <Nav />
      <div className="min-h-screen">
        <main className="overflow-hidden">
          <div className="container mx-auto">
            <div className="hero">
              <h1 className="title">{title}</h1>
            </div>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
