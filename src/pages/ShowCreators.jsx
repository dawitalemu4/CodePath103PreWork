import React, { useEffect } from 'react';

interface CreatorProps {
    Name: string;
    url: string;
    description: string;
    imageURL: string;
}

export default function ShowCreators( {Name, url, description, imageURL}) {

    const [creators, setCreators] = React.useState<CreatorProps[]>([]);

useEffect(() => {
    async function getCreators() {
   
       let { data: creators , error } = await supabase.from('creators').select('id');
    //    const data = await response.json();
    //    console.log(data);
    //    const creators = data.map((creator: any) => {
    //           return (
    //             <div id='Creator'>
    //                  <h1>{creator.Name}</h1>
    //                  <p>{creator.url}</p>
    //                  <p>{creator.description}</p>
    //                  <img src={creator.imageURL}/>
    //             </div>
    //           )
    //      });
    //         console.log(creators);
    //         for (let i = 0; i < creators.length; i++) {
    //             document.getElementById('ShowCreators')!.innerHTML += creators[i];
    //         }

        if (error) console.log('error', error);
        else setCreators(creators);
       
    }
    getCreators();
}, []);

    return (
       
            <div id='ShowCreators'>
                {creators.map((creator: CreatorProps) => {
                    return (
                        <div id='Creator'>
                            <h1>{creator.Name}</h1>
                            <p>{creator.url}</p>
                            <p>{creator.description}</p>
                            <img src={creator.imageURL}/>
                        </div>
                    )
                }
                )}
            </div>
        
    )
}