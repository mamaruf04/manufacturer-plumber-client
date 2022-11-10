import React from 'react';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const About = () => {
    return (
        <div className='px-5'>
            <PageTitle title="About-us -"></PageTitle>
            <div className="mockup-code my-9 w-2/4 mx-auto">
                <pre data-prefix="1"><code>npm i About</code></pre> 
                <pre data-prefix="2"><code>"About" is under development...</code></pre> 
                <pre data-prefix="3" className="bg-warning text-warning-content"><code>Coming soon!</code></pre>
            </div>
            <Footer />
        </div>
    );
};

export default About;