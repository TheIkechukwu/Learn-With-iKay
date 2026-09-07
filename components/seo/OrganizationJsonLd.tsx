export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Learn With iKay",
    alternateName: "LWi",
    url: "https://learnwithikay.com",
    logo: "https://learnwithikay.com/android-chrome-512x512.png",
    description:
      "Practitioner-led data analysis training and STEM tutoring, offering Data Analysis for Beginners, an Advanced Data Analysis Course, and one-on-one STEM Tutoring.",
    email: "hello@learnwithikay.com",
    telephone: "+2348166262851",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}