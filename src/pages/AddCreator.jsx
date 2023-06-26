import { useState } from 'react';
import supabase from '../client';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.gif';
import { AiOutlineHome } from 'react-icons/ai';

export default function AddCreator() {
  const [name, setName] = useState('');
  const [Youtube, setYoutube] = useState('');
  const [Twitter, setTwitter] = useState('');
  const [Instagram, setInstagram] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const redirect = () => {
    window.location.href = '/';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.from('creators').insert([{ name, Youtube, Twitter, Instagram, description, imageURL }]);

        console.log('data:', data);

      if (error) {
        console.log('error', error);
      } else {
        console.log('Creator added successfully');
      }
      redirect();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div id='AddCreator'>
      <div id='AddCreatorContainer'>
        <div id='AddCreatorBackgroundContainer'>
          <img id='AddBackgroundImage' src={backgroundImage} />

          <div id='AddCreatorHeaderContainer'>
            <p id='AddCreatorHeader'>Add Creator</p>
          </div>
        </div>

      <div id='HomeButtonContainer'>
        <Link to='/'>
          <button id='HomeButton'><AiOutlineHome/></button>
        </Link>
      </div>

      <div id='AddCreatorFormContainer'>
        <form id='AddCreatorForm' onSubmit={handleSubmit}>

          <div id='AddCreatorFormInputContainer'>
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
          
          <div id='AddCreatorFormButtonContainer'>
            <button type='submit' id='AddCreatorFormButton'>Add Creator</button>
          </div>

        </form>
      </div>
    </div>

    <style>
      {`
        #AddCreator {
          display: flex;
          position: relative;
          width: 100%;
          height: 100vh;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
        }

        #AddCreatorContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: column;
          align-items: center;
        }

        #AddCreatorBackgroundContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 40%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        #AddBackgroundImage {
          display: flex;
          position: absolute;
          width: 130%;
          height: 100%;
          object-fit: cover;
          filter: blur(10px);
          overflow: hidden;
        }

        #AddCreatorHeaderContainer {
          display: flex;
          position: relative;
          width: 420px;
          height: 35%;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
        }

        #AddCreatorHeader {
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

        #AddCreatorFormContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 45%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        #AddCreatorForm {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        #AddCreatorFormInputContainer {
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

        #AddCreatorForm input {
          display: flex;
          position: relative;
          width: 90%;
          height: 20%;
          font-size: 18px;
          border-radius: 10px;
          padding-left: 10px;
        }

        #AddCreatorFormButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 15%;
          justify-content: center;
          align-items: center;
        }

        #AddCreatorFormButton {
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

        #AddCreatorFormButton:hover {
          opacity: 0.9;
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        @media (max-width: 400px) {
          #AddCreatorHeaderContainer {
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
