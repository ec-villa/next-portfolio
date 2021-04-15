import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Error from './404';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/mrvilla')
        const data = await res.json();
        // if data is not there
        const statusCode = res.status > 200 ? res.status : false;

        return {user: data, statusCode};
    }

    render () {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title='About'>                
                <p>{user.name}</p>
                <img 
                src={user.avatar_url} alt={user.name}
                height='300px'
                />
                <Link href={user.blog}><a>Website Projects</a></Link>
            </Layout>
        )
    }
};
