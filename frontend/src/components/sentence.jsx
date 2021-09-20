import useFetch from "react-fetch-hook";

function Sentence() {
  const { data } = useFetch("http://localhost:8080/api/sentences/");
  console.log(data);

  return <div>sentence</div>;
}

export default Sentence;
