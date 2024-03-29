import { useLoaderData } from 'react-router-dom';

export const Testpage2 = () => {
    const { id } = useLoaderData();
    return(<h1>TEST PAGE :id {id}</h1> )
};
export const testdataLoader = ({ params }) => {
    const { id } = params;
    console.log(params);
    return {id};
};