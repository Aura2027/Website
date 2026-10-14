import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper pt-24">
      <Container className="text-center">
        <p className="font-display text-7xl font-semibold text-du-maroon/20">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-ink/60">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
