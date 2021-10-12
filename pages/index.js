// our-domain.com/
// import React from "react";
// ^^ Behövs ej i NextJs
import MeetupList from "../components/meetups/MeetupList";

const dummy = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/sweden/offices/card-image-emea-offices-stockholm-750x456.jpg?rev=129911e2ba704830bc7ef42b7c0d435e",
    address: "blabla 1, 12345 blabla",
    description: "Hey",
  },
  {
    id: "m2",
    title: "2",
    image:
      "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/sweden/offices/card-image-emea-offices-stockholm-750x456.jpg?rev=129911e2ba704830bc7ef42b7c0d435e",
    address: "blabla 2, 22345 blabla",
    description: "Hey2",
  },
];

function HomePage() {
  return <MeetupList meetups={dummy} />;
}

export default HomePage;
