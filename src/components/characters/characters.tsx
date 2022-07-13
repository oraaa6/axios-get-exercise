import React, { useEffect, useState } from "react";
import axios from "axios";
import "./characters.scss";

type CharactersData = {
  char_id: number;
  name: string;
  birthday: null;
  occupation: string | string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number | number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: null;
};

type CharactersResponse = CharactersData[];

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharactersResponse>([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random?limit=10")
      .then((response) => {
        const newCharacters = response.data;
        setCharacters(newCharacters);
      });
  }, []);

  return (
    <>
      <h1 className="title">10 random characters of Breaking Bad</h1>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.char_id} className="character">
            <img className="character__image" src={character.img} alt="" />
            <div>
              <p className="character__name">
                <span className="character__name--bold">
                  Name of character:
                </span>
                {character.name}
              </p>
              <p className="character__name">
                <span className="character__name--bold">
                  Nick of character:
                </span>
                {character.nickname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
