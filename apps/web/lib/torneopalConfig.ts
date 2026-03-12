export const torneopalConfig = {
  // Esimerkki: replace with the exact src string (only the query part or full URL).
  // Käytä muotoa 'https://kaukis.torneopal.fi/taso/widget.php?competition=ou2025&class=1DIV&group=4&widget=scoretable'
  // tai vastaava mikä Torneopal antaa.
  standings: {
    "1div": "https://kaukis.torneopal.fi/taso/widget.php?competition=ou2025&class=1DIV&group=4&widget=scoretable",
    "2div": "https://kaukis.torneopal.fi/taso/widget.php?competition=ou2025&class=2DIV&group=1&widget=scoretable",
  },

  // (valinnainen) jos haluat näyttää koko sarjan otteluohjelman yhdellä widgetilla, lisää vastaava src tähän
  // seriesSchedule?: "https://kaukis.torneopal.fi/taso/widget.php?competition=...&widget=schedule"
};