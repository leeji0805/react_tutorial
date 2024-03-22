import { useLoaderData } from 'react-router-dom';

export const TestPage = () => {
    const { id } = useLoaderData();
    return (<h1>TEST PAGE id: { id } </h1>);
};

export const testPageDataLoader = ({ params }) => {
    const { id } = params;
    return { id };
};
