import PropTypes from 'prop-types';
import {AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';

export default function Creator({ creator }) {
  const { name, description, imageURL, Youtube, Twitter, Instagram } = creator;

  return (
    <>
      <div id='Creator'>
        <div id='ImageContainer'>
            <img id='BlurredImage' src={imageURL} />
            <img id='Image' src={imageURL} />
        </div>
        <div id='TextContainer'>
          <div id='NameContainer'>
              <h1 id='Name'>{name}</h1>
          </div>
          <div id='DescriptionContainer'>
              <p id='Description'>{description}</p>
          </div>
          <div id='SocialMediaContainer'>
              <p id='Youtube'><AiOutlineYoutube id='YoutubeIcon'/> Youtube: <a href={Youtube} id='link'>{Youtube}</a></p>
              <p id='Twitter'><FiTwitter id='TwitterIcon'/> Twitter: <a href={Twitter} id='link'>{Twitter}</a></p>
              <p id='Instagram'><AiOutlineInstagram id='InstagramIcon'/> Instagram: <a href={Instagram} id='link'>{Instagram}</a></p>
            </div>
          </div>
      </div>
      <style>
        {`
            #Creator {
                display: flex;
                position: relative;
                width: 600px;
                height: 300px;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background-color: #212121;
                border: 1px solid white;
                border-radius: 20px;
            }
            #ImageContainer {
                display: flex;
                position: relative;
                width: 35%;
                height: 90%;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                border-radius: 5px;
            }
            #BlurredImage {
                display: flex;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                filter: blur(5px);  
                object-fit: cover;
                scale: 1.8;
                background-position: center;
            }
            #Image {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            #TextContainer {
                display: flex;
                position: relative;
                width: 60%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow-y: scroll;
            }
            #TextContainer::-webkit-scrollbar {
                width: 5px;
                height: 5px;
                background-color: #212121;
            }
            #TextContainer::-webkit-scrollbar-thumb {
                width: 5px;
                background-color: white;
                border-radius: 10px;
            }
            #NameContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 20%;
                align-items: center;
                justify-content: center;
            }
            #Name {
                display: flex;
                position: relative;
                font-size: 30px;
                font-family: 'InterSemi';
            }
            #DescriptionContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 20%;
                align-items: center;
                justify-content: center;
            }
            #Description {
                display: flex;
                position: relative;
            }
            #SocialMediaContainer {
                display: flex;
                position: relative;
                width: 90%;
                height: 50%;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
            }
            #Youtube, #Twitter, #Instagram {
                display: block;
                position: relative;
                color: white;
                text-decoration: none;
                font-size: 12px;
                text-align: left;
            }
            #link {
                display: flex;
                position: relative;
                color: #1564b0;
            }
            #YoutubeIcon {
                color: red;
            }
            #TwitterIcon {
                color: blue;
            }
            #InstagramIcon {
                color: #cb42f5;
            }
            @media (max-width: 600px) {
                #Creator {
                    width: 100%;
                }
            }
        `}
      </style>
    </>
  );
}

Creator.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    Youtube: PropTypes.string.isRequired,
    Twitter: PropTypes.string.isRequired,
    Instagram: PropTypes.string.isRequired,
  }).isRequired,
};
