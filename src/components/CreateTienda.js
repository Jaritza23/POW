import { useState } from "react";

function CreateTienda(props)
{
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");

    function handleSubmit(e) 
    {
        e.preventDefault();
        props.fnNewTienda({
            'Name': name,
            'Year': year,
            'Description': description,
            'Poster': poster
        });

        setName("");
        setYear("");
        setDescription("");
        setPoster("");

    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}
            className="border border-2 border-secondary p-2 rounded">
            <input placeholder="Name"
                className="form-control mb-2"
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} />

            <input placeholder="Year"
                className="form-control mb-2"
                type='text' 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />

            <input placeholder="Description"
                className="form-control mb-2"
                type='text' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} />

            <input placeholder="Poster"
                className="form-control mb-2"
                type='text' 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />

            <input type="submit" value="Create"
                className="btn btn-primary" />

        </form>
      
    );    
    
}

export default CreateTienda;