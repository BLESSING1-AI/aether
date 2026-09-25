import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <span className="font-semibold tracking-tight">Aether</span>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link href="/register" className="text-sm bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full font-medium hover:opacity-90 transition-opacity">
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 text-center">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
            Private · Adult · Discreet
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
            Your private AI coach for relationships, dating & intimacy
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Honest guidance on conversations, confidence, connection and sexual
            health — completely private, never shared, and designed for adults.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register" className="w-full sm:w-auto bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
              Start privately
            </Link>
            <Link href="/login" className="w-full sm:w-auto border border-border px-6 py-3 rounded-full font-medium text-sm text-foreground hover:bg-muted transition-colors">
              I already have an account
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            18+ only · No partner linking · Conversations stay yours
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Conversation starters", desc: "Natural openers, replies and flirting ideas that sound like you." },
              { title: "Relationship coaching", desc: "Build trust, handle conflict and stay connected — without guessing what they think." },
              { title: "Intimacy & sexual health", desc: "Evidence-aware education, confidence and consent-focused guidance." },
              { title: "Tonight & Tomorrow", desc: "Personalised plans for the evening or the next date based on mood and energy." },
              { title: "Private journal", desc: "Write freely. Nothing is shared. You control what’s remembered." },
              { title: "Absolute privacy", desc: "Every account is isolated. No shared memory. No one else can see your chats." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-5 text-left">
                <h3 className="font-medium text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Aether · Adults only</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
