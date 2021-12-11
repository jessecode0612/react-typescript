import {useEffect, useState} from 'react'


export default function useFileLoader({url}:{url: string}): string{
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = function() {
            setContent(client.responseText)
        }
        client.send();
    },[url])

    return content
}