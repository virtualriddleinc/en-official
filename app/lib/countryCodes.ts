// Shared country codes list and helpers

export type CountryCodeItem = { code: string; flag: string; country: string };

// Base list including all EU and NATO members (duplicates removed), plus commonly used codes already present in the app.
// Israel is intentionally excluded per requirement.
export const baseCountryCodes: CountryCodeItem[] = [
  // Priority entries
  { code: "+970", flag: "🇵🇸", country: "Palestine" },
  { code: "+1", flag: "🇺🇸", country: "United States" },

  // EU (27)
  { code: "+43", flag: "🇦🇹", country: "Austria" },
  { code: "+32", flag: "🇧🇪", country: "Belgium" },
  { code: "+359", flag: "🇧🇬", country: "Bulgaria" },
  { code: "+385", flag: "🇭🇷", country: "Croatia" },
  { code: "+357", flag: "🇨🇾", country: "Cyprus" },
  { code: "+420", flag: "🇨🇿", country: "Czech Republic" },
  { code: "+45", flag: "🇩🇰", country: "Denmark" },
  { code: "+372", flag: "🇪🇪", country: "Estonia" },
  { code: "+358", flag: "🇫🇮", country: "Finland" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+30", flag: "🇬🇷", country: "Greece" },
  { code: "+36", flag: "🇭🇺", country: "Hungary" },
  { code: "+353", flag: "🇮🇪", country: "Ireland" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+371", flag: "🇱🇻", country: "Latvia" },
  { code: "+370", flag: "🇱🇹", country: "Lithuania" },
  { code: "+352", flag: "🇱🇺", country: "Luxembourg" },
  { code: "+356", flag: "🇲🇹", country: "Malta" },
  { code: "+31", flag: "🇳🇱", country: "Netherlands" },
  { code: "+48", flag: "🇵🇱", country: "Poland" },
  { code: "+351", flag: "🇵🇹", country: "Portugal" },
  { code: "+40", flag: "🇷🇴", country: "Romania" },
  { code: "+421", flag: "🇸🇰", country: "Slovakia" },
  { code: "+386", flag: "🇸🇮", country: "Slovenia" },
  { code: "+34", flag: "🇪🇸", country: "Spain" },
  { code: "+46", flag: "🇸🇪", country: "Sweden" },

  // NATO (additions beyond EU)
  { code: "+1", flag: "🇨🇦", country: "Canada" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+47", flag: "🇳🇴", country: "Norway" },
  { code: "+354", flag: "🇮🇸", country: "Iceland" },
  { code: "+90", flag: "🇹🇷", country: "Turkey" },
  { code: "+355", flag: "🇦🇱", country: "Albania" },
  { code: "+389", flag: "🇲🇰", country: "North Macedonia" },
  { code: "+382", flag: "🇲🇪", country: "Montenegro" },

  // Commonly used (already present in app and UN members)
  { code: "+41", flag: "🇨🇭", country: "Switzerland" },
  { code: "+32", flag: "🇧🇪", country: "Belgium" },
  { code: "+43", flag: "🇦🇹", country: "Austria" },
  { code: "+46", flag: "🇸🇪", country: "Sweden" },
  { code: "+47", flag: "🇳🇴", country: "Norway" },
  { code: "+45", flag: "🇩🇰", country: "Denmark" },
  { code: "+358", flag: "🇫🇮", country: "Finland" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", country: "Qatar" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+64", flag: "🇳🇿", country: "New Zealand" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+54", flag: "🇦🇷", country: "Argentina" },
  { code: "+57", flag: "🇨🇴", country: "Colombia" },
  { code: "+56", flag: "🇨🇱", country: "Chile" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+30", flag: "🇬🇷", country: "Greece" },
  { code: "+48", flag: "🇵🇱", country: "Poland" },
  { code: "+420", flag: "🇨🇿", country: "Czech Republic" },
  { code: "+36", flag: "🇭🇺", country: "Hungary" },
  { code: "+40", flag: "🇷🇴", country: "Romania" },
  { code: "+351", flag: "🇵🇹", country: "Portugal" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
];

export function getSortedCountryCodes(): CountryCodeItem[] {
  // Remove duplicates by code, exclude Israel explicitly if present, and enforce ordering
  const uniqueByCode = new Map<string, CountryCodeItem>();
  for (const item of baseCountryCodes) {
    if (item.country.toLowerCase() === "israel") continue; // exclude
    if (!uniqueByCode.has(item.code)) uniqueByCode.set(item.code, item);
  }

  const list = Array.from(uniqueByCode.values());
  const palestine = list.find(c => c.code === "+970");
  const us = list.find(c => c.code === "+1" && c.country === "United States");
  const rest = list.filter(c => c !== palestine && c !== us);

  rest.sort((a, b) => parseInt(a.code.replace("+", "")) - parseInt(b.code.replace("+", "")));

  const result: CountryCodeItem[] = [];
  if (palestine) result.push(palestine);
  if (us) result.push(us);
  result.push(...rest);
  return result;
}


