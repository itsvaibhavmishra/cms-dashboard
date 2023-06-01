export async function getFluctuationData() {
  const res = await fetch(
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
    {
      method: 'GET',
    }
  );

  if (!res.ok) throw new Error('Failed to fetch fluctuation data.');

  const data = await res.json();
  return data;
}

export async function getCountriesData() {
  const res = await fetch('https://disease.sh/v3/covid-19/countries', {
    method: 'GET',
  });

  if (!res.ok) throw new Error('Failed to fetch country data.');

  const data = await res.json();
  return data;
}
