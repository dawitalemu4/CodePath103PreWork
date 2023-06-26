import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.gif';
import { AiOutlineHome } from 'react-icons/ai';

export default function EditCreatorForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [Youtube, setYoutube] = useState('');
  const [Twitter, setTwitter] = useState('');
  const [Instagram, setInstagram] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const redirect = () => {
    window.location.href = '/';
  };

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

        redirect();

      if (error) {
        console.log('error', error);
      } else {
        console.log('Creator updated successfully');
        setName(data.name);
        setYoutube(data.Youtube);
        setTwitter(data.Twitter);
        setInstagram(data.Instagram);
        setDescription(data.description);
        setImageURL(data.imageURL);
      }
      redirect();
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
      redirect();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div id='EditCreator'>
      <div id='EditCreatorContainer'>
        <div id='EditCreatorBackgroundContainer'>
          <img id='EditBackgroundImage' src={backgroundImage} />

          <div id='EditCreatorHeaderContainer'>
            <p id='EditCreatorHeader'>Edit Creator</p>
          </div>
        </div>

      <div id='HomeButtonContainer'>
        <Link to='/'>
          <button id='HomeButton'><AiOutlineHome/></button>
        </Link>
      </div>

      <div id='EditCreatorFormContainer'>
        <form id='EditCreatorForm' onSubmit={handleSubmit}>

          <div id='EditCreatorFormInputContainer'>
            <div id='LeftContainer'>
              <input type='text' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />

              <input type='text' id='description' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
              
              <input type='text' id='Youtube' placeholder='Youtube' value={Youtube} onChange={(e) => setYoutube(e.target.value)} required />
            </div>

            <div id='RightContainer'>
              <input type='text' id='Twitter' placeholder='Twitter' value={Twitter} onChange={(e) => setTwitter(e.target.value)} required />

              <input type='text' id='Instagram' placeholder='Instagram' value={Instagram} onChange={(e) => setInstagram(e.target.value)} required />

              <input type='text' id='imageURL' placeholder='Image URL' value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
            </div>
          </div>
          
          <div id='EditCreatorFormButtonContainer'>
              <button type='submit' id='EditCreatorFormButton'>Edit Creator</button>
              <button type='button' id='EditCreatorFormButton' onClick={handleDelete}>Delete</button>
          </div>

        </form>
      </div>
    </div>

    <style>
      {`
        #EditCreator {
          display: flex;
          position: relative;
          width: 100%;
          height: 100vh;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
        }

        #EditCreatorContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: column;
          align-items: center;
        }

        #EditCreatorBackgroundContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 40%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        #EditBackgroundImage {
          display: flex;
          position: absolute;
          width: 130%;
          height: 100%;
          object-fit: cover;
          filter: blur(10px);
          overflow: hidden;
        }

        #EditCreatorHeaderContainer {
          display: flex;
          position: relative;
          width: 420px;
          height: 35%;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
        }

        #EditCreatorHeader {
          display: flex;
          position: relative;
          font-family: 'InterBold';
          font-size: 55px;
        }

        #HomeButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 13%;
          justify-content: center;
          align-items: center;
          border: none;
        }

        #HomeButton { 
          display: flex;
          position: relative;
          width: 100%;
          color: white;
          font-size: 2.5rem;
          background-color: transparent;
          border: none;
          padding-top: 15%;
          cursor: pointer;
        }

        #HomeButton:hover {
          opacity: 0.9;
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        #EditCreatorFormContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 45%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        #EditCreatorForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        #EditCreatorFormInputContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 90%;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: space-between;
        }

        #LeftContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        #RightContainer {
          display: flex;
          position: relative;
          width: 50%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        #EditCreatorForm input {
          display: flex;
          position: relative;
          width: 90%;
          height: 20%;
          font-size: 18px;
          border-radius: 10px;
          padding-left: 10px;
        }

        #EditCreatorFormButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 15%;
          justify-content: space-around;
          align-items: center;
        }

        #EditCreatorFormButton {
          display: flex;
          position: relative;
          width: 160px;
          height: 60px;
          font-size: 18px;
          border-radius: 25px;
          background-color: #7ab6f0;
          text-decoration: underline;
          text-decoration-color: #7ab6f0;
          color: black;
          font-family: 'InterSemi';
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          cursor: pointer;
        }

        #EditCreatorFormButton:hover {
          opacity: 0.9;
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        @media (max-width: 400px) {
          #EditCreatorHeaderContainer {
            width: 380px;
          }
          #HomeButton {
            padding-top: 10%;
          }
        }
      `}
    </style>
    </div>
  );
}
