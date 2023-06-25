import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import Creator from '../components/Creator';

export default function Home() {
  const [recentCreators, setRecentCreators] = useState([]);

  useEffect(() => {
    async function fetchRecentCreators() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('id, name, url, description, imageURL')
          .order('id', { ascending: false })
          .limit(2);

        if (error) {
          console.log('error', error);
        } else {
          setRecentCreators(data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchRecentCreators();
  }, []);

  return (
    <div id='Home'>
      <h1>Welcome to the Home Page</h1>

      <div id='RecentCreators'>
        <h2>Recent Creators</h2>
        {recentCreators.map((creator) => (
          <div key={creator.id}>
            <Creator creator={creator} />
            <Link to={`/edit-creator/${creator.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>

      <div id='Buttons'>
        <Link to='/add-creator'>
          <button>Create Creator</button>
        </Link>
        <Link to='/show-creators'>
          <button>View All Creators</button>
        </Link>
      </div>

      <style>
        {`
          #Home {
            text-align: center;
          }

          h1 {
            margin-bottom: 20px;
          }

          #RecentCreators {
            margin-bottom: 20px;
          }

          #Buttons {
            display: flex;
            justify-content: center;
          }

          button {
            margin: 0 10px;
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
