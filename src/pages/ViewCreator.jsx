import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';
import Creator from '../components/Creator';

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
  
    useEffect(() => {
      async function getCreator() {
        let { data, error } = await supabase
          .from('creators')
          .select('name, url, description, imageURL')
          .eq('id', id)
          .single();
  
        if (error) {
          console.log('error', error);
        } else {
          setCreator(data);
        }
      }
  
      getCreator();
    }, [id]);
  
    if (!creator) {
      return <div>Loading...</div>;
    }
  
    return (
      <div id='ViewCreator'>
        <Creator creator={creator} />
      </div>
    );
  }  