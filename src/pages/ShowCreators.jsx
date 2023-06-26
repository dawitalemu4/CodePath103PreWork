import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import Creator from '../components/Creator';
import backgroundImage from '../assets/background.gif';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';

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
      <div id='ShowCreatorsContainer'>
        <div id='ShowCreatorBackgroundContainer'>
          <img id='ShowBackgroundImage' src={backgroundImage} />

          <div id='ShowCreatorsHeaderContainer'>
            <p id='ShowCreatorsHeader'>All Creators</p>
          </div>
        </div>

        <div id='HomeButtonContainer'>
          <Link to='/'>
            <button id='HomeButton'><AiOutlineHome/></button>
          </Link>
        </div>

        <div id='AllCreatorsContainer'>  
          {creators.map((creator) => (
            <div key={creator.id}>
              <div id='AllCreators'>
                <Creator creator={creator} />
              </div>
              <div id='ShowButtonsContainer'>
                <Link to={`/edit-creator/${creator.id}`}>
                  <button id='EditButton'><HiOutlinePencilAlt/></button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          #ShowCreators {
            display: flex;
            position: relative;
            width: 100%;
            height: 100vh;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
          }

          #ShowCreatorsContainer {
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            flex-direction: column;
            align-items: center;
          }

          #ShowCreatorBackgroundContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 55%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          #ShowBackgroundImage {
            display: flex;
            position: absolute;
            width: 350%;
            height: 100%;
            object-fit: cover;
            filter: blur(10px);
            overflow: hidden;
          }

          #ShowCreatorsHeaderContainer {
            display: flex;
            position: relative;
            width: 420px;
            height: 35%;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 20px;
          }

          #ShowCreatorsHeader {
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
            cursor: pointer;
          }

          #HomeButton:hover {
            opacity: 0.8;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          #AllCreatorsContainer {
            display: grid;
            position: relative;
            width: 100%;
            height: 70%;
            grid-template-columns: repeat(2, 1fr);
            overflow-y: scroll;
            padding-left: 2%;
            padding-right: 2%;
          }

          #AllCreatorsContainer::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            background-color: #171717;
          }

          #AllCreatorsContainer::-webkit-scrollbar-thumb {
            width: 5px;
            height: 5px;
            background-color: white;
            border-radius: 10px;
          }

          #AllCreators {
            display: flex;
            position: relative;
            width: 100%;
            justify-content: center;
            align-items: center;
          }

          #ShowButtonsContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 70px;
            justify-content: center;
            align-items: center;
          }

          #EditButton {
            display: flex;
            position: relative; 
            width: 100%;
            color: #7ab6f0;
            font-size: 2rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }

          #EditButton:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          @media (max-width: 1300px) {
            #AllCreatorsContainer {
              grid-template-columns: repeat(1, 1fr);
            }
          }

          @media (max-width: 400px) {
            #ShowCreatorsHeaderContainer {
              width: 380px;
            }
          }
        `}
      </style>
    </div>
  );
}
