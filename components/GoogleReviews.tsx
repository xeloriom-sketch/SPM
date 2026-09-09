const reviews = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Ponctuel, véhicule impeccable. Parfait pour mon rendez-vous médical à Lyon.",
    initials: "SM",
  },
  {
    name: "Jean-Pierre D.",
    rating: 5,
    text: "Chauffeur très professionnel. A géré ma prescription CPAM sans problème, zéro avance de frais.",
    initials: "JD",
  },
  {
    name: "Marie L.",
    rating: 5,
    text: "Transfert aéroport Lyon à 5h du matin, jamais en retard. Je recommande vivement.",
    initials: "ML",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "Taxi 7 places parfait pour toute la famille vers Genève. Grand confort.",
    initials: "TR",
  },
  {
    name: "Christelle B.",
    rating: 5,
    text: "Service exceptionnel pour mes séances de chimio à l'hôpital. Discret et rassurant.",
    initials: "CB",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#F59E0B"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// Google logo SVG inline
function GoogleLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 48 48"
      aria-label="Google"
      role="img"
    >
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.2 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5l-6.6-5.4C29.8 37 27 38 24 38c-6 0-11.1-4-12.9-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.6 5.4C41.5 36.1 44.5 30.5 44.5 24c0-1.3-.2-2.7-.5-4z" />
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-6 sm:px-10 md:px-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-sans text-2xl font-semibold tracking-tight text-[#080808] sm:text-3xl">
            Ce que disent nos clients
          </h2>
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <GoogleLogo />
            <Stars count={5} />
            <span className="text-sm font-semibold text-[#080808]">4,9/5</span>
            <span className="text-sm text-gray-400">—</span>
            <span className="text-sm text-gray-500">9 avis Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              {/* Stars */}
              <Stars count={review.rating} />

              {/* Review text */}
              <p className="flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#080808] text-[11px] font-bold text-white"
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#080808]">{review.name}</p>
                  <div className="flex items-center gap-1">
                    <GoogleLogo />
                    <span className="text-[11px] text-gray-400">Avis Google</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
