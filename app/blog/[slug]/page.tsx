type Params = {
  params: {
    slug: string;
  };
};

// this should run in server
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
