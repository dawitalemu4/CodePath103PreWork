import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import Creator from '../components/Creator';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('id, name, Youtube, Twitter, Instagram, description, imageURL');

        if (error) {
          console.log('error', error);
        } else {
          setCreators(data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div id='ShowCreators'>
      <h2>All Creators</h2>
      {creators.map((creator) => (
        <div key={creator.id}>
          <Creator creator={creator} />
          <Link to={`/edit-creator/${creator.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}

      <style>
        {`
          #ShowCreators {
            text-align: center;
          }

          h2 {
            margin-bottom: 20px;
          }

          button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
