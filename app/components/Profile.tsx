import Avatar from "./Avatar";

interface Profile {
  person: Person;
  size?: number;
}

interface Person {
  name: string;
  imageId: string;
}

export default function Profile(props: Profile) {
  return <Avatar {...props} />;
}
