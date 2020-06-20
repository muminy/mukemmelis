import Link from 'next/link';
import { useEffect } from 'react';
import loadFirebase from '../lib/loadFirebase';

export default function(){
    useEffect(() => {
        console.log(loadFirebase().auth().currentUser)
    }, [])
    return (
        <Link href="/">
            <a>Geri dön</a>
        </Link>
    )
}