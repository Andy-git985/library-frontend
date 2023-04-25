import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_AUTHOR, ALL_AUTHORS } from "../queries";

const EditAuthor = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const result = useQuery(ALL_AUTHORS);

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    // onError: (error) => {
    //   const message = error.graphQLErrors[0].message;
    //   setError(message);
    // },
  });

  console.log("result in editAuthor", result?.data?.allAuthors);

  if (result.loading) {
    console.log("loading...");
    return <div>Loading...</div>;
  }

  let authors = [];
  if (result?.data) {
    authors = result.data.allAuthors;
    console.log("authors", authors);
  }

  const submit = async (event) => {
    event.preventDefault();
    // addBook({ variables: { title, author, published, genres } });
    editAuthor({ variables: { name, setBornTo: born } });
    setName("");
    setBorn("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <div>
        <form onSubmit={submit}>
          {/* <div>
            author
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div> */}
          <select
            name="authors"
            value={name}
            onChange={({ target }) => setName(target.value)}
          >
            <option value="">--Please choose an author--</option>
            {authors.map((author) => (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
          <div>
            born
            <input
              value={born}
              onChange={({ target }) => setBorn(Number(target.value))}
            />
          </div>
          <button type="submit">update author</button>
        </form>
      </div>
    </div>
  );
};

export default EditAuthor;
