import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props: any) {
  console.log(props);
  return (
    <div>
      <div>
        <div className="container px-4 pt-5">
          <h1 className="text-center mb-4">La liste des utilisateurs</h1>
          <span>
            Le blog communautaire des aficionados de développement web.
          </span>

          <div className="row mt-5">
            {props.users.map((user: any) => (
              <div key={uuidv4()} className="col-12 col-sm-6 col-xl-4 mt-4">
                <div className="card w-100 h-100 ">
                  <div className="card-body d-flex justify-content-between">
                    <h5 className="card-subtitle mb-2 text-muted">
                      {user.name}
                    </h5>
                    <Link href={`/users/${user.id}`}>Contacter</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}
