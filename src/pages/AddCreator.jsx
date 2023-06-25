import React, { useState } from 'react';
import supabase from '../client';

export default function AddCreator() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [url, setURL] = useState('');
    const [loading, setLoading] = useState(false);

    async function createCreator(e) {
        e.preventDefault();

        setLoading(true);
        const { data, error } = await supabase.from('creators').insert([ { name, description, imageURL, url } ]);   
        setLoading(false);
        setName(''); 
        setDescription(''); 
        setImageURL{''}; 
        setURL('');
        
        Creator({
            name: name,
            description: description,
            imageURL: imageURL,
            url: url
        });
    }

    return (
        <form onSubmit={createCreator}>
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Input placeholder="Image URL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            <Input placeholder="URL" value={url} onChange={(e) => setURL(e.target.value)} />
            <Button type="submit" disabled={loading}>Add Creator</Button>
        </form>

    )
}