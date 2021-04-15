import Layout from '../components/Layout';

export default ({statusCode}) => (
    <Layout title='Error!!'>
    {statusCode ? `Could not fetch that user data: Status Code ${statusCode}` 
    : `Bruhh, couldn't get that Page!` }
    </Layout>
    );