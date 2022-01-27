import React from 'react'
import { useQuery } from 'react-query';

const ImageLib = () => {
    const { isLoading, error, data } = useQuery('imageLib', () => fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()), { suspense: true });

    return (
        <>
            Image library
            {
                isLoading && <div>Loading....</div>
            }
            {
                error && <div>{error.message}</div>
            }
            <ul>
            {data.length > 0 && data?.map((d,i) =>
                <li key={i}>{d.title}</li>
            )}
            </ul>
        </>
    )
}

export default ImageLib
