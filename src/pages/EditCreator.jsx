import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';

export default function EditCreatorForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [Youtube, setYoutube] = useState('');
  const [Twitter, setTwitter] = useState('');
  const [Instagram, setInstagram] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    async function fetchCreator() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('name, Youtube, Twitter, Instagram, description, imageURL')
          .eq('id', id)
          .single();

        if (error) {
          console.log('error', error);
        } else {
          setName(data.name);
          setYoutube(data.Youtube);
          setTwitter(data.Twitter);
          setInstagram(data.Instagram);
          setDescription(data.description);
          setImageURL(data.imageURL);
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchCreator();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('creators')
        .update({ name, Youtube, Twitter, Instagram, description, imageURL })
        .eq('id', id);

        console.log(data);

      if (error) {
        console.log('error', error);
      } else {
        console.log('Creator updated successfully');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from('creators').delete().eq('id', id);

      if (error) {
        console.log('error', error);
      } else {
        console.log('Creator deleted successfully');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor='Youtube'>Youtube:</label>
        <input type='text' id='Youtube' value={Youtube} onChange={(e) => setYoutube(e.target.value)} required />

        <label htmlFor='Twitter'>Twitter:</label>
        <input type='text' id='Twitter' value={Twitter} onChange={(e) => setTwitter(e.target.value)} required />

        <label htmlFor='Instagram'>Instagram:</label>
        <input type='text' id='Instagram' value={Instagram} onChange={(e) => setInstagram(e.target.value)} required />

        <label htmlFor='description'>Description:</label>
        <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label htmlFor='imageURL'>Image URL:</label>
        <input type='text' id='imageURL' value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />

        <button type='submit'>Update</button>
        <button type='button' onClick={handleDelete}>Delete</button>
      </form>
      <style>
        {`
          #EditCreatorForm {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          h2 {
            margin-bottom: 10px;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-bottom: 5px;
          }

          input,
          textarea {
            padding: 10px;
            margin-bottom: 10px;
          }

          button {
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
