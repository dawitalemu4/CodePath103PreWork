import PropTypes from 'prop-types';

export default function Creator({ creator }) {
  const { name, url, description, imageURL } = creator;

  return (
    <>
      <div id='Creator'>
        <div id='NameContainer'>
            <h1 id='Name'>{name}</h1>
        </div>
        <div id='URLContainer'>
            <a id='URL' href={url}>{url}</a>
        </div>
        <div id='DescriptionContainer'>
            <p id='Description'>{description}</p>
        </div>
        <div id='ImageContainer'>
            <img id='Image' src={imageURL} />
        </div>
      </div>
      <style>
        {`
            #Creator {
                display: flex;
                position: relative;
                width: 200px;
                height: 150px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            #NameContainer {
                display: flex;
                position: relative;
            }
            #Name {
                display: flex;
                position: relative;
                
            }
            #URLContainer {
                display: flex;
                position: relative;

            }
            #URL {
                display: flex;
                position: relative;

            }
            #DescriptionContainer {
                display: flex;
                position: relative;

            }
            #Description {
                display: flex;
                position: relative;

            }
            #ImageContainer {
                display: flex;
                position: relative;

            }
            #Image {
                display: flex;
                position: relative;
                width: 10px;
                height: 10px;
            }
        `}
      </style>
    </>
  );
}

Creator.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};
