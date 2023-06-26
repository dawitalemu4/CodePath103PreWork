import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import Creator from '../components/Creator';
import backgroundImage from '../assets/background.gif';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Home() {
  const [recentCreators, setRecentCreators] = useState([]);

  useEffect(() => {
    async function fetchRecentCreators() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('id, name, Youtube, Twitter, Instagram, description, imageURL')
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
      <div id='HomeContainer'>
        <div id='HomeBackgroundContainer'>
          <img id='HomeBackgroundImage' src={backgroundImage} />
          <div id='HomeHeaderContainer'>
            <p id='HomeHeader'>CreatorVerse</p>
          </div>
          
          <div id='OptionButtonsContainer'>
            <div id='AddCreatorContainer'>
              <Link to='/add-creator'>
                <button id='AddCreator'>Add Creator</button>
              </Link>
            </div>
            <div id='ShowCreatorContainer'>
              <Link to='/show-creators'>
                <button id='ShowCreator'>View All Creators</button>
              </Link>
            </div>
          </div>
        </div>

        <div id='RecentContainer'>
          <div id='RecentHeaderContainer'>
            <p id='RecentHeader'>Recent Creators</p>
          </div>
          <div id='RecentCreatorsContainer'>
            {recentCreators.map((creator) => (
              <div key={creator.id}>
                <Creator creator={creator} />
                <div id='RecentButtonsContainer'>
                  <Link to={`/view-creator/${creator.id}`}>
                    <button id='InfoButton'><AiOutlineInfoCircle/></button>
                  </Link>
                  <Link to={`/edit-creator/${creator.id}`}>
                    <button id='EditButton'><HiOutlinePencilAlt/></button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          #Home {
            display: flex;
            position: relative;
            width: 100%;
            height: 100vh;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
          }
          #HomeContainer {
            display: flex;
            position: relative;
            display: flex;
            position: relative;
            width: 90%;
            height: 100%;
            flex-direction: column;
            align-items: center;
          }

          #HomeBackgroundContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 40%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          #HomeBackgroundImage {
            display: flex;
            position: absolute;
            width: 130%;
            height: 100%;
            object-fit: cover;
            filter: blur(7px);
            overflow: hidden;
          }

          #HomeHeaderContainer {
            display: flex;
            position: relative;
            width: 420px;
            height: 35%;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 20px;
          }

          #HomeHeader {
            display: flex;
            position: relative;
            font-family: 'InterBold';
            font-size: 55px;
          }

          #OptionButtonsContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 50%;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            gap: 20px;
          }

          #AddCreatorContainer {
            display: flex;
            position: relative;
            width: 45%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }

          #AddCreator {
            display: flex;
            position: relative;
            width: 180px;
            height: 60px;
            justify-content: center;
            align-items: center;
            text-decoration: underline;
            text-decoration-color: #1564b0;
            color: white;
            font-family: 'InterSemi';
            font-size: 15px;
            background-color: #1564b0;
            border: 1px solid black;
            border-radius: 20px;
          }

          #ShowCreatorContainer {
            display: flex;
            position: relative; 
            width: 45%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }

          #ShowCreator {
            display: flex;
            position: relative;
            width: 180px;
            height: 60px;
            justify-content: center;
            align-items: center;
            text-decoration: underline;
            text-decoration-color: #1564b0;
            color: white;
            font-family: 'InterSemi';
            font-size: 15px;
            background-color: #1564b0;
            border: 1px solid black;
            border-radius: 20px;
          }

          #AddCreator:hover, #ShowCreator:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          #RecentContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 60%;
            justify-content: center;
            align-items: center;
            flex-direction: column; 
          }

          #RecentHeaderContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 20%;
            justify-content: center;
            align-items: center;
          }

          #RecentHeader {
            display: flex;
            position: relative;
            font-family: 'InterSemi';
            font-size: 2.5rem;
          }

          #RecentCreatorsContainer {
            display: flex;
            position: relative;
            width: 100%;
            height: 80%;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            overflow: hidden;
            padding: 10% 2%;
          }

          #RecentButtonsContainer {
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
            margin-bottom: 10px;
          }

          #EditButton:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          #InfoButton {
            display: flex;
            position: relative; 
            width: 100%;
            color: #7ab6f0;
            font-size: 2rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            margin-bottom: 10px;
          }

          #InfoButton:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          @media (max-width: 1300px) {
            #RecentCreatorsContainer {
              flex-direction: column;
              justify-content: flex-start;
              padding: 0 2%;
              overflow: scroll;
            }
            #RecentCreatorsContainer::-webkit-scrollbar {
              width: 5px;
              height: 5px;
              background-color: #171717;
            }
            #RecentCreatorsContainer::-webkit-scrollbar-thumb {
              background-color: white;
              border-radius: 10px;
            }
          }

          @media (max-width: 400px) {
            #HomeHeaderContainer {
              width: 380px;
            }
          }

        `}
      </style>
    </div>
  );
}
