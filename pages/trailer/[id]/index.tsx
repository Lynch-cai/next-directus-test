import directus from "../../api/directus";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Trailer({ trailer }: any) {
  console.log(trailer);

  const postComment = async (nickname: string, description: string, note: number) => {
    await directus.items("comments").createOne({
      nickname,
      description,
      note,
      trailer_id: 2,
    });
  };

  const getComments = async (): Promise<any> => {
    const commentsData = await directus.items("comments").readByQuery();
    return commentsData;
  };

  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState<number>(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((data) => setComments(data.data));
  }, []);

  // if (!comments.length) return <div>No comments</div>;

  return (
    <div>
      <Link href="/">Retour en arrière</Link>

      <hr></hr>

      <h1>{trailer.title}</h1>
      <p>{trailer.description}</p>
      <img src={"http://0.0.0.0:8055/assets/" + trailer.image} />
      <iframe width="640" height="360" src={trailer.url}></iframe>

      <hr></hr>

      <div>
        <h3>Comments</h3>
        {/* example comment */}
        <ul>
          {comments.map((comment: any, key: number) => (
            <li key={key}>
              <h5>{comment.nickname}</h5>
              <p>{comment.description}</p>
              <div>
                <h6>Note</h6>
                <span>{comment.note}/5</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <hr></hr>

      <form>
        <h3>Write a comment</h3>
        <label htmlFor="nickname">Nickname</label>
        <input
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          type="text"
          id="nickname"
        />

        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          id="description"
        />

        <label htmlFor="note">Note</label>
        <input
          onChange={(e) => {
            setNote(Number(e.target.value));
          }}
          type="number"
          id="note"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            postComment(nickname, description, note);
          }}
        >
          Send comment
        </button>
      </form>
    </div>
  );
}

export async function getStaticProps() {
  const trailer: any = await directus.items("trailers").readByQuery({
    filter: {
      id: {
        _eq: "2",
      },
    },
  });

  return {
    props: {
      trailer: trailer.data[0],
    },
  };
}

export async function getStaticPaths() {
  const trailers: any = await directus.items("trailers").readByQuery();

  const paths = trailers.data.map((trailer: any) => ({
    params: { id: trailer.id.toString() },
  }));

  return { paths, fallback: false };
}
