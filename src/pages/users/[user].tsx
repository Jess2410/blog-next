import React from "react";
import { uuid } from "uuidv4";

export default function user(props: any) {
  console.log(props);

  return (
    <div key={uuid()} className="container px-4 pt-5">
      <h1 className="text-center mb-4">
        {" "}
        {props.user.name} {props.user.username}{" "}
      </h1>
      <p>{props.user.email}</p>
      <p>{props.user.address.street}</p>
      <p>{props.user.address.suite}</p>
      <p>{props.user.address.city}</p>
      <p>{props.user.address.zipcode}</p>
      <p>{props.user.address.geo.lat}</p>
      <p>{props.user.address.geo.lng}</p>
      <p>{props.user.phone}</p>
      <p>{props.user.website}</p>
      <p>{props.user.company.name}</p>
      <p>{props.user.company.catchPhrase}</p>
      <p>{props.user.company.bs}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const id = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths(context: any) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const paths = users.map((user: any) => ({
    params: { user: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
