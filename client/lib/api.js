const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

async function fetchAPI(path, options = {}) {
  const url = `${API_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getHero() {
  try {
    return await fetchAPI('/hero?populate=*');
  } catch {
    return null;
  }
}

export async function getLeadership() {
  try {
    return await fetchAPI('/leadership-members?populate=*');
  } catch {
    return null;
  }
}

export async function getInvestorMetrics() {
  try {
    return await fetchAPI('/investor-metrics?populate=*');
  } catch {
    return null;
  }
}

export async function getLogos() {
  try {
    return await fetchAPI('/partner-logos?populate=*');
  } catch {
    return null;
  }
}

export async function submitForm(type, data) {
  return fetch(`${API_URL}/forms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, ...data }),
  });
}
