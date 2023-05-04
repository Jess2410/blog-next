import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props: any) {
  console.log(props);

  return (
    <div>
      <div className="container px-4 pt-5">
        <h1 className="text-center mb-4">Bienvenue sur Code.io</h1>
        <span>Le blog communautaire des aficionados de développement web.</span>

        <div className="row mt-5">
          {props.articles.map((item: any) => (
            <>
              <div key={uuidv4()} className="col-12 col-sm-6 col-xl-4 mt-4">
                <div className="card w-100 h-100 ">
                  <div className="card-body ">
                    <h5 className="card-title">{item.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.title}
                    </h6>
                    <p className="card-text">
                      {item.body.slice(0, 20) + "..."}
                    </p>
                    <Link href={`/blog/${item.id}`}>Lire cet article</Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //   (response) => response.json()
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  return {
    props: {
      // data,
      articles,
    },
  };
}
