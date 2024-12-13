export type NewsArticle = {
  abstract: string;
  title: string;
  url: string;
  published_date: string;
  multimedia: MultimediaItem[];
};

export type MultimediaItem = {
  url: string;
};

export type SearchArticle = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: SearchMultimediaItem[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
};

export type SearchMultimediaItem = {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  subType: string;
  crop_name: string;
};

export type Headline = {
  main: string;
  kicker: string;
  content_kicker: string | null;
  print_headline: string | null;
  name: string | null;
  seo: string | null;
  sub: string | null;
};

export type Keyword = {
  name: string;
  value: string;
  rank: number;
  major: string;
};

export type Byline = {
  original: string;
  person: BylinePerson[];
  organization: string | null;
};

type BylinePerson = {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  role: string;
  organization: string;
  rank: number;
};
