import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';
import { Link } from 'react-router-dom';
import Creator from '../components/Creator';
import backgroundImage from '../assets/background.gif';
import { AiOutlineHome } from 'react-icons/ai';

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
  
    useEffect(() => {
      async function getCreator() {
        let { data, error } = await supabase
          .from('creators')
          .select('name, Youtube, Twitter, Instagram, description, imageURL')
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
        <div id='ViewCreatorContainer'>
          <div id='ViewCreatorBackgroundContainer'>
            <img id='ViewBackgroundImage' src={backgroundImage} />

            <div id='ViewCreatorHeaderContainer'>
              <p id='ViewCreatorHeader'>View Creator</p>
            </div>
          </div>

          <div id='HomeButtonContainer'>
            <Link to='/'>
              <button id='HomeButton'><AiOutlineHome/></button>
            </Link>
          </div>

          <div id='ViewCreatorContainer'>
            <Creator creator={creator} />
          </div>
        </div>

      <style>
      {`
      #ViewCreator {
          display: flex;
          position: relative;
          width: 100%;
          height: 100vh;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
        }

        #ViewCreatorContainer {
          display: flex;
          position: relative;
          width: 90%;
          height: 100%;
          flex-direction: column;
          align-items: center;
        }

        #ViewCreatorBackgroundContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 83%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        #ViewBackgroundImage {
          display: flex;
          position: absolute;
          width: 130%;
          height: 100%;
          object-fit: cover;
          filter: blur(10px);
          overflow: hidden;
        }

        #ViewCreatorHeaderContainer {
          display: flex;
          position: relative;
          width: 420px;
          height: 35%;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
        }

        #ViewCreatorHeader {
          display: flex;
          position: relative;
          font-family: 'InterBold';
          font-size: 55px;
        }

        #HomeButtonContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 25%;
          justify-content: center;
          align-items: flex-end;
        }

        #HomeButton { 
          display: flex;
          position: relative;
          width: 100%;
          color: white;
          font-size: 2.5rem;
          background-color: transparent;
          border: none;
          padding-bottom: 15%;
          cursor: pointer;
        }

        #HomeButton:hover {
          opacity: 0.9;
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        #ViewCreatorContainer {
          display: flex;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        @media (max-width: 400px) {
          #ViewCreatorHeaderContainer {
            width: 380px;
          }
          #HomeButton {
            padding-bottom: 10%;
          }
        }

      `}
      </style>
    </div>

    );
  }  